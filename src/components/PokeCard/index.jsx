import * as S from './styles'
import pokebola from 'assets/images/pokebola.png'
import addButton from 'assets/images/add-button.png'
// import removeButton from 'assets/images/remove-button.png'
import PokeCardType from 'components/PokeCardType'
import typesColor from 'constants/typesColor'
import {PokedexContext} from 'contexts/pokedex'
import {useContext, useState} from 'react'
import useGo from 'hooks/useGo'
import catchSound from 'assets/sounds/catcha.mp3'
import blinkSound from 'assets/sounds/blink.mp3'
import runSound from 'assets/sounds/run.mp3'
import {useRef} from 'react'

const PokeCard = props => {
  const pokedex = useContext(PokedexContext)
  const go = useGo()
  const [icon, setIcon] = useState(addButton)
  const catchSoundRef = useRef()
  const blinkSoundRef = useRef()
  const runSoundRef = useRef()

  const verifyPokemon = pokemon => pokemon.name === props.name
  const pokemonInPokedex = pokedex.list.some(verifyPokemon)

  const addPokedex = e => {
    e.preventDefault()
    e.stopPropagation()
    if (!pokemonInPokedex) {
      pokedex.dispatch({type: 'add', pokemon: props})
      setIcon(pokebola)
      catchSoundRef.current.pause()
      catchSoundRef.current.currentTime = 0
      catchSoundRef.current.play()
    } else {
      setIcon(addButton)
      pokedex.dispatch({type: 'remove', pokemon: props})
      runSoundRef.current.pause()
      runSoundRef.current.currentTime = 0
      runSoundRef.current.play()
    }
  }

  if (pokemonInPokedex && icon !== pokebola) {
    setIcon(pokebola)
  }

  return (
    <S.CardContainer
      typeColor={typesColor[props.types[0].type.name]}
      onClick={() => go.detail(props.name)}
      onMouseOver={() => blinkSoundRef.current.play()}
    >
      <audio src={catchSound} ref={catchSoundRef} />
      <audio src={blinkSound} ref={blinkSoundRef} />
      <audio src={runSound} ref={runSoundRef} />
      <S.PokeId>#{props.id}</S.PokeId>
      <S.PokeName>{props.name}</S.PokeName>
      <PokeCardType types={props.types} />
      <S.Pokebola src={icon} onClick={addPokedex} />
      <S.PokeImg src={props.sprites.other['official-artwork'].front_default} />
    </S.CardContainer>
  )
}

export default PokeCard
