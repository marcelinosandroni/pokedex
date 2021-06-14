import styled, {css, keyframes} from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.5);
  bottom: 0;
  ${props => props.theme.fixedFooter && 'position: fixed'};
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`

export const Footer = styled.footer`
  width: clamp(350px, 80%, 1400px);
  display: grid;
  grid: 1fr 30px / repeat(3, minmax(80px, max-content));
  place-items: center;
  place-content: space-around;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.5);
`

export const LogoContainer = styled.div``
export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`

export const SocialContainer = styled.div``
export const Social = styled.img`
  width: 100px;
  /* height: 100px; */
`

export const AuthorsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  position: relative;
`

export const Authors = styled.img`
  width: 50px;
  height: 50px;
  clip-path: circle(50%);
`

export const Message = styled.p`
  grid-column: 1 / 4;
  align-self: start;
  width: clamp(350px, 80%, 1280px);
  text-align: center;
  font-size: 1.2rem;
  color: white;
`

const back = keyframes`
  from {
   right: -300%;
   opacity: 0;
  }
  to {
    right: -150%;
    opacity: 1;
  }
`

const goOut = keyframes`
  from {
    right: 0%;
  }
  to {
    right: -50%;
  }
`

export const AuthorName = styled.p`
  display: grid;
  align-items: end;
  width: max(250px, 100%);
  height: 100%;
  color: white;
  font-size: 1.5rem;
  word-wrap: nowrap;
  text-align: right;
  top: 85%;
  right: -300%;
  ${props =>
    props.show &&
    css`
      animation: ${back} 0.5s forwards;
    `};
  /* ${props =>
    !props.show &&
    css`
      animation: ${goOut} 1s forwards;
    `}; */
  position: absolute;
`
