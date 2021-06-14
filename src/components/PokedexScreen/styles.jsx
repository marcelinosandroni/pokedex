import styled, {css} from 'styled-components'
import screen from 'assets/images/screen.png'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  width: 48%;
  height: 30vw;
  background: url(${screen}) no-repeat;
  background-size: contain;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  padding: 8% 8% 0 8%;
  gap: 4%;

  @media (min-width: 1600px) {
    gap: 0;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  /* padding: 2rem; */
  display: flex;
  align-items: center;
  height: 10%;
`

const text = css`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`

export const ID = styled.p`
  ${text}
`

export const Name = styled.p`
  ${text}
`

export const Types = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`

export const Type = styled.img`
  width: 60px;
`

export const Image = styled.img`
  height: 50%;

  @media (min-width: 1600px) {
    height: 45%;
  }
`

export const Button = styled(Link)`
  background-color: #333;
  color: gold;
  width: 60%;
  height: 20%;
  border-radius: ${({theme}) => theme.space(1)};
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;

  @media (min-width: 1600px) {
    height: 16%;
  }
`
