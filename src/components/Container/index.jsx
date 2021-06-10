import * as S from './styles'

const Container = props => {
  return (
    <S.Container>
      <S.Content>{props.children}</S.Content>
    </S.Container>
  )
}

export default Container
