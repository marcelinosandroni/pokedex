import Link from 'next/link'
import * as S from './styles'

const PokedexScreen = ({pokemon}) => {
  const capitalize = name => {
    const a = name[0].toUpperCase()
    const b = name.slice(1).toLowerCase()
    return a + b
  }

  return (
    <S.Container>
      <S.InfoContainer>
        <S.Name>
          {pokemon.name ? capitalize(pokemon.name) : 'Select a pokemon'}
        </S.Name>
        {pokemon.name && (
          <S.Types>
            {pokemon.types.map(i => (
              <S.Type key={i.type.name} src={`/typeicons/${i.type.name}.png`} />
            ))}
          </S.Types>
        )}
      </S.InfoContainer>
      <S.Image
        src={
          pokemon.name &&
          pokemon.sprites.versions['generation-v']['black-white'].animated
            .front_default
        }
      />
      <Link href={`/battle/${pokemon}`} as='/battle'>
        <S.Button>Battle</S.Button>
      </Link>
    </S.Container>
  )
}

export default PokedexScreen
