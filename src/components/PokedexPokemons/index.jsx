import PokedexCard from 'components/PokedexCard'
import * as S from './styles'

const PokedexPokemons = ({pokemons, select, remove}) => {
  return (
    <S.Container>
      {pokemons.map(i => (
        <PokedexCard pokemon={i} select={select} remove={remove} />
      ))}
    </S.Container>
  )
}

export default PokedexPokemons
