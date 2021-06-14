import PokedexCard from 'components/PokedexCard'
import * as S from './styles'
import pokeballOut from 'assets/sounds/pokeball-out.mp3'
import pokeballRun from 'assets/sounds/run.mp3'
import {useRef} from 'react'

const PokedexPokemons = ({pokemons, active, select, remove}) => {
  const sound = useRef({})

  const selectPokemon = pokemon => {
    select(pokemon)
    sound.current.select.pause()
    sound.current.select.currentTime = 0
    sound.current.select.play()
  }

  const removePokemon = pokemon => {
    remove({type: 'remove', pokemon})
    console.log(active.name)
    console.log(pokemon.name)
    if (active.name === pokemon.name) {
      select({})
    }
    sound.current.run.play()
  }

  return (
    <S.Container>
      <audio src={pokeballOut} ref={el => (sound.current.select = el)} />
      <audio src={pokeballRun} ref={el => (sound.current.run = el)} />
      {pokemons.map(i => (
        <PokedexCard
          pokemon={i}
          select={selectPokemon}
          remove={removePokemon}
        />
      ))}
    </S.Container>
  )
}

export default PokedexPokemons
