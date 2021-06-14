import * as S from './styles'
import battleMusic from 'assets/sounds/battle-music.webm'
import {useEffect, useRef, useState} from 'react'
import {pokeapi} from 'hooks/usePokeapi'
import Player, {playerProps} from 'utils/player-class'
import bump from 'assets/sounds/bump.mp3'
import lose from 'assets/sounds/lose.mp3'
import win from 'assets/sounds/victory.mp3'
import hit from 'assets/sounds/hit.mp3'
import superHit from 'assets/sounds/super-hit.mp3'
import blink from 'assets/sounds/blink.mp3'

const Battle = ({history}) => {
  const battleMusicRef = useRef()
  const [player, setPlayer] = useState(playerProps)
  const [enemy, setEnemy] = useState(playerProps)
  const playerRef = useRef(playerProps)
  const enemyRef = useRef(playerProps)
  const turn = useRef('player')
  const [winner, setWinner] = useState(false)
  const [final, setFinal] = useState(false)
  const sounds = useRef({})

  useEffect(() => {
    const enemyNumber = Math.floor(Math.random() * 151 + 1)
    const playerNumber = Math.floor(Math.random() * 151 + 1)
    const pokemonInPokedex = history.location.state
    pokeapi(`pokemon/${enemyNumber}`).then(r => {
      enemyRef.current = new Player(r.data, setEnemy, false)
      if (pokemonInPokedex) {
        playerRef.current = new Player(pokemonInPokedex, setPlayer)
      }
    })

    if (!pokemonInPokedex) {
      pokeapi(`pokemon/${playerNumber}`).then(r => {
        playerRef.current = new Player(r.data, setPlayer)
      })
    }
  }, [])

  useEffect(() => {
    battleMusicRef.current.volume = 0.2
    battleMusicRef.current.play()
  }, [])

  const showWinner = winner => {
    setWinner(winner)
    setTimeout(() => {
      battleMusicRef.current.pause()
      if (winner === 'player') {
        sounds.current.win.play()
      } else {
        sounds.current.lose.play()
      }
      setFinal(true)
    }, 500)
  }

  useEffect(() => {
    if (player.maxHp && player.hp === 0) {
      showWinner('enemy')
    }
    if (enemy.maxHp && enemy.hp === 0) {
      showWinner('player')
    }
  }, [player.hp, enemy.hp])

  const hitSound = dmg => {
    if (dmg > 10) sounds.current.superHit.play()
    else sounds.current.hit.play()
  }

  const playerTurn = move => {
    if (turn.current === 'player') {
      const dmg = playerRef.current?.attack(move, enemyRef.current)
      turn.current = 'enemy'
      setTimeout(() => hitSound(dmg), 300)
    } else {
      sounds.current.bump.play()
    }
  }

  const enemyTurn = () => {
    if (!winner) {
      const random = Math.floor(Math.random() * 3)
      setTimeout(() => {
        turn.current = 'player'
        const dmg = enemyRef.current.attack(random, playerRef.current)
        setTimeout(() => {
          console.log('TOCA SOM', player.hp, enemy.hp)
          player.hp && enemy.hp && hitSound(dmg)
        }, 300)
      }, 2000)
    }
  }

  useEffect(() => {
    if (turn.current === 'enemy') {
      enemyTurn()
    }
  }, [turn.current])

  const blinkSound = () => {
    sounds.current.blink.pause()
    sounds.current.blink.currentTime = 0.4
    sounds.current.blink.play()
  }

  return (
    <S.Container>
      <audio src={battleMusic} ref={battleMusicRef} loop />
      <audio src={bump} ref={el => (sounds.current.bump = el)} />
      <audio src={win} ref={el => (sounds.current.win = el)} />
      <audio src={lose} ref={el => (sounds.current.lose = el)} />
      <audio src={hit} ref={el => (sounds.current.hit = el)} />
      <audio src={superHit} ref={el => (sounds.current.superHit = el)} />
      <audio src={blink} ref={el => (sounds.current.blink = el)} />
      {final && (
        <>
          <S.Finish>{winner === 'player' ? 'You Win!' : 'You Lose!'}</S.Finish>
          <S.WinnerImg src={player.front} winner={winner} />
          <S.BackButton to='/pokedex'>Back to Pokedex</S.BackButton>
        </>
      )}
      <S.Turn>{turn.current} turn</S.Turn>
      <S.Enemy src={enemy.animation} />
      <S.EnemyInfo>
        <S.Name> {enemy.name} </S.Name>
        <S.HP hp={enemyRef.current.hpPercent()} />
        <S.HPValue>{enemyRef.current.hp}</S.HPValue>
      </S.EnemyInfo>

      <S.Player src={player.animation} />
      <S.PlayerInfo>
        <S.Name>{player.name}</S.Name>

        <S.HP hp={playerRef.current.hpPercent()} />
        <S.HPValue>{playerRef.current.hp}</S.HPValue>
      </S.PlayerInfo>

      <S.BottomBar>
        {playerRef.current?.moves?.map((move, i) => (
          <S.Attack
            key={move.name}
            onClick={() => playerTurn(i)}
            onMouseOver={blinkSound}
          >
            {move.name}
          </S.Attack>
        ))}
      </S.BottomBar>
    </S.Container>
  )
}

export default Battle
