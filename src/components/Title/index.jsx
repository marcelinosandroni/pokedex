import * as S from './styles'

const Title = ({children}) => {
  return (
    <S.TitleContainer>
      <S.Image src='images/pokebola-black.png' />
      <S.Title>{children}</S.Title>
    </S.TitleContainer>
  )
}

export default Title
