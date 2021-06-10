import {PokedexProvider} from 'contexts/pokedex'
import PokeTheme from 'styles/PokeTheme'
import '../styles/global'

const MyApp = ({Component, pageProps}) => (
  <PokeTheme>
    <PokedexProvider>
      <Component {...pageProps} />
    </PokedexProvider>
  </PokeTheme>
)

export default MyApp
