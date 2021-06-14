import {pokeapi} from 'hooks/usePokeapi'

export const playerProps = {
  name: '',
  maxHp: 0,
  hp: 0,
  def: 0,
  att: 0,
  moves: [],
  animation: '',
  hpPercent: () => {},
  attack: () => {}
}

export default class Player {
  name
  maxHp
  hp
  def
  att
  moves
  animation
  front

  constructor(pokemon, set, back = true) {
    this.name = pokemon.name
    this.maxHp = this.getStat(pokemon, 'hp')
    this.hp = this.getStat(pokemon, 'hp')
    this.def = this.getStat(pokemon, 'defense')
    this.att = this.getStat(pokemon, 'attack')
    this.moves = []
    this.getMoves(pokemon)
    this.animation = back
      ? pokemon?.sprites?.versions['generation-v']['black-white'].animated
          .back_default
      : pokemon?.sprites?.versions['generation-v']['black-white'].animated
          .front_default
    this.front =
      pokemon?.sprites?.versions['generation-v'][
        'black-white'
      ].animated.front_default
    this.set = set
  }

  props = () => {
    const values = Object.keys(this).reduce(
      (o, i) => ({...o, [i]: this[i]}),
      {}
    )
    this.set(values)
  }

  attack(move, enemy) {
    // console.log(this.moves, move)
    let moveIndex = move
    if (move >= this.moves.length) moveIndex = this.moves.length - 1
    const dmg = Math.round((this.moves[moveIndex].power + this.att) / 4)

    return enemy.defend(dmg)
  }

  defend(dmg) {
    let hp = this.hp
    let def = this.def
    let damage = Math.round(dmg * (1 - def / 100))
    if (damage < 5) damage = 5
    hp -= damage
    if (hp < 0) this.hp = 0
    else this.hp = hp
    this.props()
    return damage
  }

  getStat = (pokemon, stat) => {
    const r = pokemon?.stats?.filter(i => i.stat.name === stat)
    const hp = r?.length && r[0]?.base_stat
    return hp
  }

  getMoves = async pokemon => {
    const amount = pokemon.moves.length
    const random = this.getRandomMove(amount)
    const randomMoves = pokemon?.moves?.filter((m, i) => random.includes(i))
    const moves = await Promise.all(
      randomMoves.map(i => pokeapi(i.move.url))
    ).then(r => {
      this.moves = r.map(i => i.data)
      this.props()
    })
  }

  getRandomMove = max => {
    let r = []
    for (let i = 0; i < 4; i++) r = [...r, Math.floor(Math.random() * max)]
    return r
  }

  hpPercent = () => (this.hp / this.maxHp) * 100
}
