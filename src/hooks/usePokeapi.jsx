import axios from 'axios'
import {useState, useEffect, useRef, useCallback} from 'react'

const baseURL = 'https://pokeapi.co/api/v2/'
const pokeapi = axios.create({baseURL})

const usePokeapi = (...option) => {
  const [data, setData] = useState([])
  const itemsPage = useRef(20)
  const next = useRef('')
  const previous = useRef('')
  const filtered = useRef([])
  const allPokemonNames = useRef([])

  console.log(data)
  /*


  */

  const getData = useCallback(
    async (url, catchAll, clear) => {
      console.log('getData', url, catchAll)
      const params = {limit: itemsPage.current}
      try {
        let {data: r} = await pokeapi({url, params})
        next.current = r.next
        // let currentType
        console.log('date ANTES: ', data)
        console.log('antes: ', next.current, previous.current)

        if (catchAll) {
          switch (url.split('/')[0]) {
            case 'pokemon':
              if (next.current && previous.current) {
                r = await getAll(next.current, r.results, 'name')
              } else {
                console.log(data)
                console.log(r.results)
                r = await getAll(url, r.results, catchAll)
              }
              break
            case 'type':
              console.log('TYPE')
              // currentType = url.split('/')[1]
              r = await getAll(url, r.pokemon, catchAll)

              break
            default:
              console.log('FUDEO', url)
          }
        } else if (next.current && previous.current) {
          r = await getAll(next.current, r.results, 'name')
        }

        previous.current = next.current
        if (clear) {
          console.log('LImpezinha')
          return setData([...r])
        }

        console.log(data)
        if (!data.length && !Array.isArray(r)) {
          console.log('NAO EH ARRAY')
          setData(r)
        } else {
          let PokeWithImages
          if (Array.isArray(r)) {
            PokeWithImages = r.filter(
              i => i.sprites?.other['official-artwork']?.front_default
            )
          }
          setData([...data, ...PokeWithImages])
        }
      } catch (e) {
        console.error(e)
      }
    },
    [data, itemsPage]
  )

  const getAll = async (url, list, props) => {
    if (url.includes('/')) url = 'pokemon'

    try {
      console.log('tryed')
      const allPokemons = list.map(i => {
        if (typeof i[props] !== 'string' && typeof i !== 'string') {
          filtered.current = [...filtered.current, i[props].name]
          return pokeapi({url: `pokemon/${i[props].name}`})
        }
        if (typeof i === 'string') {
          return pokeapi({url: `${url}/${i}`})
        }

        return pokeapi({url: `${url}/${i[props]}`})
      })

      const pagePokemons = allPokemons.slice(0, 20)
      // if (pagePokemons.length < 20) alert(pagePokemons.length)

      const r = await Promise.all(pagePokemons)
      return r.map(i => i.data)
    } catch (e) {
      console.error(e)
    }
  }

  const request = useCallback(
    (options = '') => {
      console.warn('inside')
      const [endpoint = '', prop = '', clear = ''] = options
      if (prop) {
        console.log('REQUEST ALL')
        console.log('request init: ', data)
        getData(endpoint, prop, clear)
      } else if (next.current) {
        console.log('REQUEST NEXT')
        getData(next.current)
      } else {
        console.log('REQUEST ENDPOINT')
        getData(endpoint)
      }
    },
    [getData]
  )

  useEffect(() => {
    console.log('NEW REQUEST')
    request(option)
  }, [])

  const update = async (...option) => {
    const list = filtered.current.length
    const current = data.length
    const page = itemsPage.current
    if (current === list) {
      return -1
    }
    if (list && current < list) {
      let final = current + page
      if (final > list) {
        final = list
      }
      let nextFilter = filtered.current.slice(current, current + final)
      const r = await getAll(`pokemon`, nextFilter, 'name')

      const PokeWithImages = r.filter(
        i => i.sprites?.other['official-artwork']?.front_default
      )

      const all = [...data, ...PokeWithImages]
      const names = all.map(i => i.name)
      filtered.current = filtered.current.filter((p, i) =>
        i < final ? names.includes(p) : true
      )

      setData(all)
    } else if (!list) {
      console.log('UPDATE')
      request([...option])
    } else return -1
  }

  const clear = () => {
    setData([])
    filtered.current = []
    next.current = ''
    previous.current = ''
  }

  const filterByName = async search => {
    allPokemonNames.current = await pokeapi('pokemon?limit=1118')
    const filterPokemon = poke => poke.name.includes(search)
    const filtered = allPokemonNames.current.data.results.filter(filterPokemon)
    const r = await getAll(`pokemon`, filtered, 'name')

    const PokeWithImages = r.filter(
      i => i.sprites?.other['official-artwork']?.front_default
    )
    setData([...PokeWithImages])
  }

  return [data, update, clear, filterByName]
}

export {pokeapi}
export default usePokeapi
