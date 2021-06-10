import typesColor from 'constants/typesColor'
import * as S from './styles'
import pokebola from 'assets/images/pokebola-filter.png'

const Filter = ({filter}) => {
  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchLabel>Search</S.SearchLabel>
        <S.SearchInput
          name='search'
          value={filter.search}
          onChange={filter.control}
          placeholder='Name or #ID'
        />
      </S.SearchContainer>
      <S.Image src={pokebola} />
      <S.TypeContainer>
        <S.TypeLabel>Type</S.TypeLabel>
        <S.TypeInput name='type' value={filter.type} onChange={filter.control}>
          <S.TypeOption value=''>Choose a type</S.TypeOption>
          {Object.keys(typesColor).map(t => (
            <S.TypeOption key={t} value={t}>
              {t}
            </S.TypeOption>
          ))}
        </S.TypeInput>
      </S.TypeContainer>

      {/* <S.OrderContainer>
        <S.OrderLabel>Order</S.OrderLabel>

        <S.OrderInput>
          <S.OrderOption value>Choose order</S.OrderOption>
        </S.OrderInput>
      </S.OrderContainer> */}
    </S.Container>
  )
}

export default Filter
