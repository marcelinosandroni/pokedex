import * as S from './styles'
import pokebola from 'assets/images/pokebola-black.png'

const Title = ({children}) => {
  return (
    <S.TitleContainer>
      <S.Image src={pokebola} />
      <S.Title>{children}</S.Title>
    </S.TitleContainer>
  )
}

export default Title
