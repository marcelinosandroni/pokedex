import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import * as S from './styles'
import PokeCard from 'components/PokeCard'
import usePokeapi from 'hooks/usePokeapi'
import useInput from 'hooks/useInput'
import Filter from 'components/Filter'
import Title from 'components/Title'
import Loading from 'components/Loading'
import {useTheme} from 'styled-components'

const filterInitialValues = {
  search: '',
  type: '',
  order: ''
}

const Database = props => {
  const [loading, setLoading] = useState(false)
  const listSize = useRef(0)
  const cards = useRef()
  const filter = useInput(filterInitialValues)
  const option = useRef(filterInitialValues)
  const [pokemonList, setPokemonList, clearList, filterName] = usePokeapi(
    'pokemon',
    'name'
  )
  const theme = useTheme()
  const end = useRef(false)

  useEffect(() => {
    if (filter.type && filter.type !== option.current.type) {
      option.current.type = filter.type
      clear()
      setPokemonList(`type/${filter.type}`, 'pokemon', 'clear')
    }
    if (Number(filter.search) && filter.search !== option.current.search) {
      option.current.search = filter.search
      clear()
      setPokemonList(`pokemon/${filter.search}`, true, true)
    }

    if (filter.search.length >= 3 && filter.search !== option.current.search) {
      option.current.search = filter.search
      clear()
      filterName(filter.search)
    }

    if (!filter.search && option.current.search) {
      option.current.search = ''
      startAgain()
    }
  }, [filter, clearList, filterName, setPokemonList])

  const clear = () => {
    listSize.current = 0
    clearList()
  }

  // const more = useCallback(() => {
  //   setPokemonList()
  // }, [setPokemonList])

  useEffect(() => {
    console.log(loading, pokemonList.length, listSize.current)
    if (loading && pokemonList.length <= listSize.current) {
      console.log('UNLOAD')
      setLoading(false)
    }
  }, [pokemonList])

  const handleScroll = useCallback(
    e => {
      const windowSize = window.innerHeight
      const {bottom, top} = cards.current.getBoundingClientRect()
      if (windowSize - bottom >= 0 && pokemonList.length !== listSize.current) {
        listSize.current = pokemonList?.length || 0
        setPokemonList().then(r => {
          if (r === -1) {
            end.current = true
            setLoading(false)
          }
        })
        if (!end.current) setLoading(true)

        if (!theme.fixedFooter) {
          theme.dispatch({type: 'set', prop: {fixedFooter: true}})
          theme.dispatch({
            type: 'set',
            prop: {containerPadding: '50px 0 250px 0'}
          })
        }
      }

      if (top + windowSize >= 0 && theme.fixedFooter) {
        console.log('desativa: ', top + windowSize)
        theme.dispatch({type: 'set', prop: {fixedFooter: false}})
        theme.dispatch({
          type: 'set',
          prop: {containerPadding: '50px 0'}
        })
      }
    },
    [pokemonList]
  )

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const startAgain = () => {
    clear()
    setPokemonList('pokemon', 'name', true)
  }

  return (
    <>
      <Title>List of all Pokemons</Title>
      <Filter filter={filter} reset={startAgain} />
      <S.CardContainer ref={cards}>
        {pokemonList?.length ? (
          pokemonList
            .sort((a, b) => a.id - b.id)
            .map(pokemon => <PokeCard key={pokemon.id} {...pokemon} />)
        ) : (
          <Loading />
        )}
      </S.CardContainer>
      {loading && <Loading size={50} />}
    </>
  )
}

export default Database
