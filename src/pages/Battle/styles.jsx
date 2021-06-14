import {Link} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
`

export const Enemy = styled.img`
  width: 15vw;
  /* height: 25vw; */
  position: absolute;
  top: 5%;
  right: 20%;
`

export const EnemyInfo = styled.div`
  width: 40%;
  /* height: 10%; */
  border: 3px solid #333;
  position: absolute;
  top: 2%;
  left: 10%;
  border-radius: ${({theme}) => theme.space(1)};
  padding: ${({theme}) => theme.space(1)};
  display: grid;
  grid: 1fr 1fr / 8fr 2fr;
  place-items: center;
`

export const Name = styled.p`
  color: black;
  font-size: 3rem;
`

export const HP = styled.div`
  width: 80%;
  height: 50%;
  background-color: black;
  position: relative;
  grid-row-start: 2;
  grid-column: 1;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.hp + '%'};
    height: 100%;
    background-color: gold;
    z-index: 2;
  }
`
export const HPValue = styled.span`
  color: tomato;
  font-size: 3rem;
  grid-row: 2;
  grid-column: 2;
`

export const Player = styled(Enemy)`
  top: 50%;
  left: 20%;
`
export const PlayerInfo = styled(EnemyInfo)`
  top: 45%;
  left: 50%;
`

export const BottomBar = styled.div`
  width: 100%;
  height: min(200px, 25%);
  position: absolute;
  bottom: 3%;
  background: ${({theme}) => theme.colors.primary};
  color: white;
  font-size: min(2.5rem, 5vh);
  display: grid;
  grid: 1fr 1fr / 1fr 1fr;
  gap: 2%vw;
  place-items: center;
  place-content: center;
  padding: 8px;
`

export const Attack = styled.span`
  display: grid;
  place-items: center;
  width: min(60%, 400px);
  height: 80%;
  padding: 0rem;
  border: 3px solid white;
  border-radius: 8px;
  user-select: none;
  padding: 0 8px;

  :hover {
    background: gold;
    color: black;
    cursor: pointer;
  }
`

export const Turn = styled.div`
  position: absolute;
  width: 20%;
  height: 10%;
  top: 40%;
  left: 2%;
  font-size: clamp(1rem, 2vw, 3rem);
  background-color: ${({theme}) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  display: grid;
  place-items: center;
`

export const Finish = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  color: ${({theme}) => theme.colors.text.primary};
  font-size: 4rem;
  text-align: center;
  position: absolute;
  z-index: 3;
  padding-top: 10%;
`

const treme = keyframes`
  from {

  }
`

export const WinnerImg = styled.img`
  transform: ${props =>
    props.winner === 'player'
      ? `rotate(0) translate(-50%, 0)`
      : `rotate(180deg) translate(50%, 0)`};

  position: absolute;
  top: 35%;
  left: 50%;
  width: min(200px, 20%);
  z-index: 10;
`
export const BackButton = styled(Link)`
  text-decoration: none;
  text-align: center;
  /* line-height: 1.5; */
  width: 40%;
  height: min(15%, 80px);
  position: absolute;
  top: 66%;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: tomato;
  color: white;
  border: 5px solid #393939;
  border-radius: 8px;
  font-size: 3rem;
  z-index: 10;
  display: grid;
  place-items: center;

  :hover {
    background: gold;
    color: black;
  }
`
