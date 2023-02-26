import React from 'react'
import Search from "./components/search/Search";
import Pokemon from './components/PokemonCard/card/Card'
import Loader from './components/loader/Loader'
import { MyAppStyled } from './AppStyles';
import GlobalStyles from './styles/GlobalStyles';
import { useAxios } from './hooks/useAxios';

function App() {

  const { data, isLoading, error, handleSubmit } = useAxios()

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
