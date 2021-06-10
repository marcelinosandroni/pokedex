import Link from 'next/link'
import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <Link href='/'>
          <S.Logo src='images/logo.png' />
        </Link>
        <S.Animation src='images/pikachu-correninho.gif' />
        <S.Menu>
          <S.MenuItem href='/'>Home</S.MenuItem>
          <S.MenuItem href='/database'>Database</S.MenuItem>
          <S.MenuItem href='/pokedex'>Pokedex</S.MenuItem>
          <S.MenuItem href='/types'>Types</S.MenuItem>
          <S.MenuItem href='/about'>About</S.MenuItem>
          <S.MenuItem href='/contact'>Contact</S.MenuItem>
        </S.Menu>
      </S.Header>
    </S.Container>
  )
}

export default Header
