import DetailBasicInformation from 'components/DetailBasicInformation'
import DetailAttributes from 'components/DetailAttributes'
import DetailEvolutions from 'components/DetailEvolutions'
import usePokeapi from 'hooks/usePokeapi'
import {useParams} from 'react-router'
import typesColor from 'constants/typesColor'
import * as S from './styles'
import {pokeapi} from 'hooks/usePokeapi'
import {useEffect, useState} from 'react'

const Detail = props => {
  const {id} = useParams()
  const [pokemon] = usePokeapi(`pokemon/${id}`)
  const mainType = pokemon.name && pokemon.types[0].type.name
  const color = typesColor[mainType]
  const [specie, setSpecie] = useState({})
  const [evolution, setEvolution] = useState({})
  const [evolutionInfo, setEvolutionInfo] = useState([])

  useEffect(() => {
    if (pokemon.name && !specie.id) {
      pokeapi({url: `pokemon-species/${pokemon.id}`}).then(r => {
        setSpecie(r.data)
      })
    }
  }, [pokemon, specie, evolution])

  useEffect(() => {
    if (specie?.id) {
      pokeapi({url: `${specie?.evolution_chain.url}`}).then(r => {
        // console.log(r.data)
        setEvolution(r.data)
      })
    }
  }, [specie])

  useEffect(() => {
    if (evolution?.id && !evolutionInfo.length) {
      getEvolutions(evolution)
    }
  })

  let description
  if (specie.shape) {
    const en = specie.flavor_text_entries.find(i => i.language.name === 'en')
    // const regex = new RegExp(/\n|\f/, 'g')
    description = en.flavor_text.replace(/\n|\f/g, ' ')
  }
  const shape = specie.shape && specie?.shape.name
  const habitat = specie.shape && specie?.habitat.name

  const getEvolutions = async evolutionChain => {
    //chain.species.name
    //chain.evolves_to[0].species.name
    //chain.evolves_to[0].evolves_to[0].species.name

    let names = []
    if (evolutionChain?.chain?.species?.name) {
      names.push(evolutionChain?.chain?.species?.name)
      const evo2 = evolutionChain.chain?.evolves_to[0]?.species.name
      if (evo2) {
        names.push(evo2)
        const evo3 =
          evolutionChain.chain?.evolves_to[0]?.evolves_to[0]?.species.name
        if (evo3) names.push(evo3)
      }
    }

    // const calls = names.map(i => pokeapi({url: `pokemon/${i}`}))
    // const calls = i => pokeapi({url: `pokemon/${i}`})

    const r = await Promise.all(names.map(i => pokeapi({url: `pokemon/${i}`})))
    // const r = await Promise.all(names.map(calls))
    setEvolutionInfo(r.map(i => i.data))
  }

  return (
    <S.DetailContainer>
      {pokemon.name && (
        <>
          <S.Title>
            {pokemon.name} #{String(pokemon.id).padStart(3, 0)}
          </S.Title>
          <S.DetailImg
            src={pokemon.sprites.other['official-artwork'].front_default}
          />

          <DetailBasicInformation
            {...pokemon}
            {...{color, description, shape, habitat}}
          />
          <DetailAttributes {...pokemon} color={color} />
          <DetailEvolutions {...pokemon} color={color} evo={evolutionInfo} />
        </>
      )}
    </S.DetailContainer>
  )
}

export default Detail
