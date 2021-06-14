import * as S from './styles'

const DetailEvolutions = pokemon => {
  return (
    <S.Container color={pokemon.color}>
      <S.TitleContainer color={pokemon.color}>
        <S.Title color={pokemon.color}>Evolutions</S.Title>
      </S.TitleContainer>
      <S.OtherContainer />
      <S.NewContainer>
        {pokemon.evo.length &&
          pokemon.evo.map((poke, i, a) => (
            <>
              <S.Image src={poke.sprites.front_default} />
              {a.length > i + 1 && <S.Arrow />}
            </>
          ))}
      </S.NewContainer>
    </S.Container>
  )
}

export default DetailEvolutions
