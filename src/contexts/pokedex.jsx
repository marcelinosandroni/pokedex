import {createContext, useEffect, useReducer} from 'react'

const initialValues = {
  list: [],
  dispatch: () => {}
}

export const PokedexContext = createContext(initialValues)

const pokedexReducer = (pokedex, action) => {
  const save = value => localStorage.setItem('pokemon', JSON.stringify(value))
  let p
  switch (action.type) {
    case 'set':
      p = action.pokemon
      save(p)
      return p
    case 'add':
      p = [...pokedex, action.pokemon]
      save(p)
      return p
    case 'remove':
      p = [...pokedex.filter(i => i.id !== action.pokemon.id)]
      save(p)
      return p
    default:
      console.error('defina opcao correta', action)
  }
}

export const PokedexProvider = ({children}) => {
  const [list, dispatch] = useReducer(pokedexReducer, [])

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem('pokemon'))
    console.log(save, list)
    if (!list.length && save) dispatch({type: 'set', pokemon: save})
  }, [])

  return (
    <PokedexContext.Provider value={{list, dispatch}}>
      {children}
    </PokedexContext.Provider>
  )
}
