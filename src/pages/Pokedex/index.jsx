import * as S from './styles'
import {PokedexContext} from 'contexts/pokedex'
import {useContext, useEffect, useRef, useState} from 'react'
import pokebola from 'assets/images/pokebola-black.png'
import PokedexScreen from 'components/PokedexScreen'
import PokedexInformation from 'components/PokedexInformation'
import PokedexPokemons from 'components/PokedexPokemons'
import pokedexSound from 'assets/sounds/pokedex.mp3'

const Pokedex = () => {
  const pokedex = useContext(PokedexContext)
  const [active, setActive] = useState({})
  const sound = useRef()

  const count = pokedex.list.length

  const sum = (sum, i) => {
    const types = i.types.map(j => j.type.name)
    let temp = {}

    types.forEach(i => (temp = {...temp, [i]: sum[i] + 1 || 1}))
    return {...sum, ...temp}
  }

  const countTypes = count && pokedex.list.reduce(sum, {})

  useEffect(() => sound.current.play(), [])

  return (
    <S.Container>
      <audio src={pokedexSound} ref={sound} loop />
      <S.TitleContainer>
        <S.Image src={pokebola} />
        <S.Title>Pokedex</S.Title>
      </S.TitleContainer>
      <S.PokedexContainer>
        <PokedexScreen pokemon={active} />
        <PokedexInformation
          amount={count}
          types={countTypes}
          pokemons={pokedex.list}
        />
        <PokedexPokemons
          active={active}
          pokemons={pokedex.list}
          remove={pokedex.dispatch}
          select={setActive}
        />
        {/* <S.Screen>
        {active.name && (
          <>
            <S.ScreenImage
              src={
                active.sprites.versions['generation-v']['black-white'].animated
                  .front_default
              }
            />
          </>
        )}
      </S.Screen> */}
        {/* <S.PokeCardContainer>
        {pokedex.list.map(pokemon => (
          <PokedexCard pokemon={pokemon} select={setActive} />
        ))}
*/}
      </S.PokedexContainer>
    </S.Container>
  )
}

export default Pokedex
