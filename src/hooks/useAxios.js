import { useState } from 'react';
import axios from 'axios'

export const useAxios = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault()
    setData(null)
    setError(false)
    setIsLoading(true)

    try {
      let selectedPokemon = pokemon.toLowerCase().trim()
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      setData(data)
    } catch (error) {
      setError(`Pokemon no encontrado. Te hace falta ver mas Pokemon`)
    }
    setIsLoading(false)
  }
  return { data, isLoading, error, handleSubmit }
}