import * as S from './styles'

const PokedexCard = ({pokemon, select, remove}) => {
  const removePokemon = e => {
    e.stopPropagation()
    remove({type: 'remove', pokemon})
  }
  return (
    <S.PokedexCardContainer onClick={() => select(pokemon)}>
      <S.Image src={pokemon?.sprites?.front_default} />
      <S.RemoveIcon src='images/remove-button.png' onClick={removePokemon} />
    </S.PokedexCardContainer>
  )
}

export default PokedexCard
