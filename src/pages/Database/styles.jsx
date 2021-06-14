import styled from 'styled-components'

export const Text = styled.h2`
  color: tomato;
  font-size: ${props => props.theme.typography.h1};
`

export const CardContainer = styled.div`
  display: grid;
  grid: auto / repeat(auto-fit, minmax(280px, 1fr));
  place-items: center;
  gap: 1rem;
  padding: ${({theme}) => theme.space(2)};
`

export const ButtonMore = styled.button`
  width: 30%;
  font-size: 3rem;
  margin: 20px auto;
  display: block;
`
