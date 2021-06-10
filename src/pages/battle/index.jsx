import * as S from './styles'
import {useEffect, useRef, useState} from 'react'
import {pokeapi} from 'hooks/usePokeapi'
import Player, {playerProps} from '../pokedex/player'

const Battle = props => {
  console.log({props})
  const battleMusicRef = useRef()
  const [player, setPlayer] = useState(playerProps)
  const [enemy, setEnemy] = useState(playerProps)
  const playerRef = useRef(playerProps)
  const enemyRef = useRef(playerProps)
  const turn = useRef('player')
  const [winner, setWinner] = useState(false)
  const battleMusic = 'sounds/battle-music.webm'

  useEffect(() => {
    const enemyNumber = Math.floor(Math.random() * 151 + 1)
    pokeapi(`pokemon/${enemyNumber}`).then(r => {
      enemyRef.current = new Player(r.data, setEnemy, false)
      playerRef.current = new Player(history?.location?.state, setPlayer)
    })
  }, [])

  useEffect(() => battleMusicRef.current.play(), [])

  useEffect(() => {
    if (player.maxHp && player.hp === 0) {
      setWinner('enemy')
      battleMusicRef.current.pause()
    }
    if (enemy.maxHp && enemy.hp === 0) {
      battleMusicRef.current.pause()
      setWinner('player')
    }
  }, [player.hp, enemy.hp])

  const playerTurn = move => {
    if (turn.current === 'player') {
      playerRef.current?.attack(move, enemyRef.current)
      turn.current = 'enemy'
    }
  }

  const enemyTurn = () => {
    const random = Math.floor(Math.random() * 3)
    setTimeout(() => {
      turn.current = 'player'
      enemyRef.current.attack(random, playerRef.current)
    }, 2000)
  }

  useEffect(() => {
    if (turn.current === 'enemy') {
      enemyTurn()
    }
  }, [turn.current])

  return (
    <S.Container>
      <audio src={battleMusic} ref={battleMusicRef} loop />
      {winner && (
        <>
          <S.Finish>{winner === 'player' ? 'You Win!' : 'You Lose!'}</S.Finish>
          <S.WinnerImg src={player.front} winner={winner} />
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
          <S.Attack key={move.name} onClick={() => playerTurn(i)}>
            {move.name}
          </S.Attack>
        ))}
      </S.BottomBar>
    </S.Container>
  )
}

export default Battle
