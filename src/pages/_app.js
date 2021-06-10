import {PokedexProvider} from 'contexts/pokedex'
import PokeTheme from 'styles/PokeTheme'
import 'styles/global'
import Layout from 'components/Layout'

const MyApp = ({Component, pageProps}) => (
  <PokeTheme>
    <PokedexProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PokedexProvider>
  </PokeTheme>
)

export default MyApp
