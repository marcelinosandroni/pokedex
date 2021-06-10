import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.5);
  overflow: visible;
  position: absolute;
  z-index: 2;
`

export const Header = styled.header`
  width: clamp(350px, 80%, 1400px);
  padding: 0 60px;
  /* margin-top: 2rem; */
  height: 70px;
  margin: auto;
  display: grid;
  grid: 70px / 1fr 2fr 5fr;
  place-items: center;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.5);
  z-index: 2;
`

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`

export const Animation = styled.img`
  width: 80px;
  transform: translate(0, -10%);
  box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.5);
`

export const Menu = styled.nav`
  width: 100%;
  display: grid;
  grid: 1fr / repeat(6, minmax(100px, 1fr));
  gap: 0.5rem;
  place-items: center;
`

export const MenuItem = styled(Link)`
  color: white;
  font-size: 1.4rem;
  text-decoration: none;

  &.active {
    color: ${({theme}) => theme.colors.secondary};
    font-weight: bold;
  }

  :hover {
    text-decoration: underline;
  }
`
