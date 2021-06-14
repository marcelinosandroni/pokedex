import {createGlobalStyle, keyframes} from 'styled-components'
import background from 'assets/images/background.png'

const move = keyframes`
  from {
    background-position: 0% 0px;
  }
  to {
    background-position: 100% 800px;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    color: black;

    background-image: url(${background});
    background-size: 30%;
    background-repeat: repeat;
    animation: ${move} 90s linear alternate infinite;
    background-color: #e3e3e3;
  }
`

export default GlobalStyle
