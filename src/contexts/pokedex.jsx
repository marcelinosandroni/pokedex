import {createContext, useReducer} from 'react'

const initialValues = {
  list: [],
  dispatch: () => {}
}

export const PokedexContext = createContext(initialValues)

const pokedexReducer = (pokedex, action) => {
  switch (action.type) {
    case 'set':
      return action.pokemon
    case 'add':
      return [...pokedex, action.pokemon]
    case 'remove':
      return [...pokedex.filter(i => i.id !== action.pokemon.id)]
    default:
      console.error('defina opcao correta', action)
  }
}

export const PokedexProvider = ({children}) => {
  const [list, dispatch] = useReducer(pokedexReducer, [])

  return (
    <PokedexContext.Provider value={{list, dispatch}}>
      {children}
    </PokedexContext.Provider>
  )
}
