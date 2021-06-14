import {Link} from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/images/logo.png'
import squirtle from '../../assets/images/squirtle-baby.png'
import charmander from '../../assets/images/charmander-baby.png'
import bulbasaur from '../../assets/images/bulbasaur-basy.png'
import beatriz from 'assets/images/beatriz.jpeg'
import marcelino from 'assets/images/marcelino.jpeg'
import nathalia from 'assets/images/nathalia.jpeg'
import {useState} from 'react'

const Footer = () => {
  const [authorName, setAuthorName] = useState('')
  return (
    <S.Container>
      <S.Footer>
        <S.LogoContainer>
          <Link to='/'>
            <S.Logo src={logo} />
          </Link>
        </S.LogoContainer>
        <S.SocialContainer>
          <a href='http://www.facebook.com'>
            <S.Social src={squirtle} />
          </a>
          <a href='http://www.twitter.com'>
            <S.Social src={charmander} />
          </a>
          <a href='http://www.instagram.com'>
            <S.Social src={bulbasaur} />
          </a>
        </S.SocialContainer>

        <S.AuthorsContainer>
          <a
            href='https://www.linkedin.com/in/marcelinosandroni/'
            target='_blank'
          >
            <S.Authors
              src={marcelino}
              onMouseOver={() => setAuthorName('Marcelino Sandroni')}
              onMouseOut={() => setAuthorName('')}
            />
          </a>
          <S.AuthorName show={authorName}>{authorName}</S.AuthorName>
        </S.AuthorsContainer>
        <S.Message>
          Super Mega Power Pokedex @ 2021 All rights reserved
        </S.Message>
      </S.Footer>
    </S.Container>
  )
}

export default Footer
