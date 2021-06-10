import Head from 'next/head'
import * as S from '../styles/home'
import {useTheme} from 'styled-components'
import {useEffect} from 'react'

const Home = () => {
  const theme = useTheme()

  useEffect(() => {
    theme.dispatch({
      type: 'set',
      prop: {
        containerFull: false,
        containerPadding: 0
      }
    })
    return () => {
      theme.dispatch({
        type: 'set',
        prop: {
          containerFull: true,
          containerPadding: '50px 0'
        }
      })
    }
  }, [])

  return (
    <S.Container>
      <Head>
        <title>Pokedex</title>
        <meta name='description' content='Best Pokedex of the world!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <S.Video autoPlay loop muted src='videos/pokemon-opening-season1.webm' />
      <S.Shadow />
      <S.Content>
        <S.TitleTop align='start'>The nostalgic Pokemon is back...</S.TitleTop>
        <S.TitleBottom align='end'>
          See the infinite list and choose your Pokemon
        </S.TitleBottom>
        <S.Image src=' images/three-pokemons.png' />
        <S.ImageMewTwo src='images/mewtwo.png' />
        <S.MewTwoPower />
      </S.Content>
      <S.Arrow />
    </S.Container>
  )
}

export default Home
