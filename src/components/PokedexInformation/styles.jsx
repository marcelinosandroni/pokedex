import styled from 'styled-components'

export const Container = styled.div`
  width: 51%;
  height: min(28.5vw, 500px);
  background-color: #e84848;
  border: 5px solid #393939;
  border-radius: ${({theme}) => theme.space(1)};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: ${({theme}) => theme.space(1)};
  position: relative;
`

export const Title = styled.h3`
  width: 100%;
  height: 20%;
  text-align: center;
  line-height: 1.8;
  background: linear-gradient(
    to left,
    rgba(80, 175, 95, 1),
    rgba(80, 173, 94, 1)
  );
  border: 3px solid #3c6238;
  border-radius: ${({theme}) => theme.space(1)};
  color: #ffce31;
  font-size: 1.8rem;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`

export const TypesCounterContainer = styled.div`
  width: 100%;
  height: 88%;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`

export const TypeCounter = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  /* flex-basis: 34px; */
`

export const Type = styled.img`
  width: 100px;
`

export const Pokeball = styled.img`
  width: 20px;
  height: 20px;
`

export const Count = styled.p`
  color: #fff;
  font-size: 1.2rem;
`

export const Image = styled.img`
  position: absolute;
  top: 15%;
  right: -30%;
  width: 65%;
  transform: rotate(-30deg);
  /* height: 100%; */
`
