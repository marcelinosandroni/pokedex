import styled, {css} from 'styled-components'

export const Container = styled.main`
  padding-top: 50px;
  width: 100%;
  min-height: 100vh;
  /* background-color: gray; */
  /* background-color: #e3e3e3; */
`

export const Content = styled.div`
  ${({theme}) =>
    theme.containerFull ? `width: clamp(350px, 80%, 1280px)` : `width: 100%`};
  margin: auto;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
  padding: ${({theme}) => theme.containerPadding};
  ${props =>
    props.theme.containerBackground &&
    css`
      background-color: ${props.theme.containerBackground};
    `}
  min-height: calc(100vh - 50px);
`
