import * as S from './styles'

const PokedexInformation = ({amount, types}) => {
  console.log('typos: ', types)
  console.log(Object.entries(types))
  return (
    <S.Container>
      <S.Title>{amount} Pokemons capturados</S.Title>
      <S.TypesCounterContainer>
        {Object.entries(types).map(i => (
          <S.TypeCounter key={i[0]}>
            <S.Type src={`/typetags/${i[0]}.png`} />
            <S.Pokeball src='images/pokebola.png' />
            <S.Count>{i[1]}</S.Count>
          </S.TypeCounter>
        ))}
      </S.TypesCounterContainer>
      <S.Image src='images/vai-la-ash.png' />
    </S.Container>
  )
}

export default PokedexInformation
