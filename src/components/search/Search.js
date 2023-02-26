import React, { useState } from 'react'
import { InputStyled, SearchFormStyled, ButtonStyled } from './SearchStyles'
import { ImSearch } from 'react-icons/im'


const Search = ({ handleSubmit }) => {
  const [pokemon, setPokemon] = useState("")

  return (
    <SearchFormStyled onSubmit={(e) => {
      handleSubmit(e, pokemon)
      setPokemon("")
    }} >
      <InputStyled 
        value={pokemon}
        placeholder="Searh a pokemon"
        onChange={(e) => {
          setPokemon(e.target.value);
        }} />
      <ButtonStyled type='submit' >
        <ImSearch size="20" color="#c1c0c9" />
      </ButtonStyled>
    </SearchFormStyled>
  )
}

export default Search