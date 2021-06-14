import * as S from './styles'

const DetailAttributes = pokemon => {
  const statsName = [
    'HP',
    'Attack',
    'Defense',
    'Special Attack',
    'Special Defense',
    'Speed'
  ]
  return (
    <S.Container color={pokemon.color}>
      <S.TitleContainer color={pokemon.color}>
        <S.Title color={pokemon.color}>Atributes</S.Title>
      </S.TitleContainer>
      <S.StatsContainer color={pokemon.color}>
        <div></div>
      </S.StatsContainer>
      <S.AnotherContainer>
        {pokemon.stats.map((stat, index) => (
          <S.StatContainer>
            <S.Stat>{statsName[index]}:</S.Stat>
            <S.Bar value={stat.base_stat} color={pokemon.color} />
          </S.StatContainer>
        ))}
      </S.AnotherContainer>
    </S.Container>
  )
}

export default DetailAttributes
