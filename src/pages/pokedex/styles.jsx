import styled from 'styled-components'

export const Container = styled.section`
  width: clamp(350px, 96%, 1280px);
  margin: auto;
  min-height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2rem;
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Image = styled.img`
  width: 50px;
`
export const Title = styled.h1`
  font-size: 2.5rem;
  align-self: center;
  text-transform: uppercase;
`

export const PokedexContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export const PokemonsContainer = styled.div``
