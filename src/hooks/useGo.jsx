import {useHistory} from 'react-router-dom'

const useGo = () => {
  const history = useHistory()

  const home = () => history.push('/')
  const pokedex = () => history.push('/pokedex')
  const detail = id => history.push(`/detail/${id}`)
  const notfound = () => history.push('/404')

  return {home, pokedex, detail, notfound}
}

export default useGo
