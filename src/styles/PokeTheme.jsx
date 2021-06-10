import {useReducer} from 'react'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './global'

const theme = {
  colors: {
    primary: '#342F99',
    secondary: '#FFCA08',
    text: {primary: '#6b6b6b', secondary: '#393939'},
    background: {
      primary: 'branco',
      secondary: 'cinza'
    }
  },
  typography: {
    h1: '4rem',
    h2: '4rem',
    h3: '3rem',
    body1: '2rem',
    body2: '1.5rem',
    button1: '2rem',
    button2: '1.5rem'
  },
  space: number => number * 8 + 'px',
  fixedFooter: false,
  containerFull: true,
  containerBackground: '#fff',
  containerPadding: '50px 0'
}

const pokeThemeReducer = (prev, action) => {
  switch (action.type) {
    case 'off':
      return {...prev, [action.prop]: false}
    case 'set':
      return {...prev, ...action.prop}
    case 'toogle':
      return {...prev, [action.prop]: !prev[action.prop]}
    default:
      console.error('Used wrong option')
  }
}

const PokeTheme = ({children}) => {
  const [pokeTheme, dispatch] = useReducer(pokeThemeReducer, theme)

  return (
    <ThemeProvider theme={{...pokeTheme, dispatch}}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default PokeTheme
