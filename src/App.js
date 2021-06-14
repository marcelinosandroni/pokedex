import Router from './routes/Router'
import {PokedexProvider} from 'contexts/pokedex'
import PokeTheme from 'styles/PokeTheme'

function App() {
  return (
    <PokeTheme>
      <PokedexProvider>
        <Router />
      </PokedexProvider>
    </PokeTheme>
  )
}

export default App
