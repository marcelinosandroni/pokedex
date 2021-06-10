import {useRouter} from 'next/router'

const useGo = () => {
  const router = useRouter()

  const home = () => router.push('/')
  const pokedex = () => router.push('/pokedex')
  const detail = id => router.push(`/detail/${id}`)
  const notfound = () => router.push('/404')

  return {home, pokedex, detail, notfound}
}

export default useGo
