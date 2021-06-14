import * as S from './styles'
import removeButton from 'assets/images/remove-button.png'

const PokedexCard = ({pokemon, select, remove}) => {
  const removePokemon = e => {
    e.stopPropagation()
    remove(pokemon)
  }

  return (
    <S.PokedexCardContainer onClick={() => select(pokemon)}>
      <S.Image src={pokemon?.sprites?.front_default} />
      <S.RemoveIcon src={removeButton} onClick={removePokemon} />
    </S.PokedexCardContainer>
  )
}

export default PokedexCard
