const {useState} = require('react')
import defaultTheme from 'styles/PokeTheme'

const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme)
}
