import {NavLink} from 'components/NavLink'
import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <NavLink href='/'>
          <S.Logo src='images/logo.png' />
        </NavLink>
        <S.Animation src='images/pikachu-correninho.gif' />
        <S.Menu>
          <NavLink href='/'>
            <S.MenuItem>Home</S.MenuItem>
          </NavLink>
          <NavLink href='/database'>
            <S.MenuItem>Database</S.MenuItem>
          </NavLink>
          <NavLink href='/pokedex'>
            <S.MenuItem>Pokedex</S.MenuItem>
          </NavLink>
          <NavLink href='/battle'>
            <S.MenuItem>Battle</S.MenuItem>
          </NavLink>
          <NavLink href='/types'>
            <S.MenuItem>Types</S.MenuItem>
          </NavLink>
          <NavLink href='/about'>
            <S.MenuItem>About</S.MenuItem>
          </NavLink>
        </S.Menu>
      </S.Header>
    </S.Container>
  )
}

export default Header
