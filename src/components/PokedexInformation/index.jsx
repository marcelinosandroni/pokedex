import * as S from './styles'
import ash from 'assets/images/vai-la-ash.png'
import pokeball from 'assets/images/pokebola.png'

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
            <S.Pokeball src={pokeball} />
            <S.Count>{i[1]}</S.Count>
          </S.TypeCounter>
        ))}
      </S.TypesCounterContainer>
      <S.Image src={ash} />
    </S.Container>
  )
}

export default PokedexInformation
