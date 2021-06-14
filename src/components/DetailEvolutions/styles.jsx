import styled from 'styled-components'
import {IoIosArrowForward} from 'react-icons/io'

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${props => props.color};
  border-radius: ${props => props.theme.space(1)};
  font-size: 1.5rem;
  position: relative;
  margin: 70px;
`
export const TitleContainer = styled.div`
  width: 100%;
  background-color: ${props => props.color};
  border-radius: ${props =>
    `${props.theme.space(1)} ${props.theme.space(1)} 0 0`};
`
export const Title = styled.h3`
  font-size: 2rem;
  text-align: center;
  color: #fff;
`

export const OtherContainer = styled.div`
  background-color: #fff;
  height: 100%;
  background-color: ${props => props.color};
  opacity: 0.3;
  /* position: relative; */
`

export const NewContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;

  display: grid;
  grid: 1fr / repeat(auto-fit, minmax(50px, 10vw));
  /* padding: 2rem; */
  place-items: center;
  place-content: center;
  gap: 1rem;
`
export const Image = styled.img`
  width: 15vw;
  height: 20vw;
`

export const Arrow = styled(IoIosArrowForward)`
  color: white;
  font-size: 5vw;
  flex-basis: 5vw;
  /* margin-top: 120px; */
  z-index: 2;
`
