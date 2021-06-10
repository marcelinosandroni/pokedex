import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  /* background-color: ${props => props.color}; */
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

export const StatsContainer = styled.div`
  padding: 50px;
  width: 100%;
  height: 300px;
  background-color: ${props => props.color};
  opacity: 0.3;
  position: relative;
  z-index: 1;

  div {
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
  }
`

export const AnotherContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  z-index: 2;
  padding: 10px 50px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
`

export const StatContainer = styled.div`
  width: 100%;
  display: grid;
  grid: 1fr / 2fr 5fr;
  justify-items: end;
  gap: 2rem;
`

export const Stat = styled.span`
  font-weight: bold;
  /* width: 30%; */
  margin: 5px 0;
  color: #727272;
`

export const Bar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  border: 1px solid #fff;
  place-self: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    width: ${props => `${props.value / 2}%`};
    height: 100%;
    background-color: ${props => props.color};
  }
`

export const BarValue = styled.span`
  border-radius: 8px;
  width: ${props => `${Number(props.value) / 2}%`};
  height: 100%;
  background-color: ${props => props.color};
`
