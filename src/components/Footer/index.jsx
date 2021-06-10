import Link from 'next/link'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Container>
      <S.Footer>
        <S.LogoContainer>
          <Link href='/'>
            <S.Logo src='images/logo.png' />
          </Link>
        </S.LogoContainer>
        <S.SocialContainer>
          <a href='http://www.facebook.com'>
            <S.Social src='images/squirtle-baby.png' />
          </a>
          <a href='http://www.twitter.com'>
            <S.Social src='images/charmander-baby.png' />
          </a>
          <a href='http://www.instagram.com'>
            <S.Social src='images/bulbasaur-baby.png' />
          </a>
        </S.SocialContainer>

        <S.AuthorsContainer>
          <S.Authors src='images/marcelino.jpeg' />
        </S.AuthorsContainer>
        <S.Message>
          Super Mega Power Pokedex @ 2021 All rights reserved
        </S.Message>
      </S.Footer>
    </S.Container>
  )
}

export default Footer
