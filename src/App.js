import React, { useState } from 'react'
import axios from 'axios';
import Search from "./components/search/Search";
import Pokemon from './components/PokemonCard/card/Card'
import Loader from './components/loader/Loader'
import { MyAppStyled } from './AppStyles';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

 const handleSubmit = async (e, pokemon) => {
    e.preventDefault()
    setData(null);
    setError(false);
    setIsLoading(true)

  try {
    let selectedPokemon = pokemon.toLowerCase().trim()
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
    setData(data)
  } catch (error) {
    setError("Pokemon no encontrado, trata de memorizarte mejor los names 🤡")
  }
  setIsLoading(false)
 }

  return (
    <>
      <MyAppStyled>
        <Search handleSubmit={handleSubmit} />
        { isLoading && <Loader /> }
        { error && <h2 style={{ color: "#f24c4c" }} >{ error }</h2> }
        { data && <Pokemon {...data} /> }
      </MyAppStyled>
      <GlobalStyles/>
    </>
  )
}

export default App;
