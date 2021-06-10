import * as S from './styles'

const PokeCardType = ({types}) => {
  return (
    <S.TypesContainer>
      {types.map(item => (
        <S.Type key={item.type.name} src={`/typeicons/${item.type.name}.png`} />
      ))}
    </S.TypesContainer>
  )
}

export default PokeCardType
