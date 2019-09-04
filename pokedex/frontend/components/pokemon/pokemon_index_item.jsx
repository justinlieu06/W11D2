import { Link } from "react-router-dom";
import React from 'react';

const PokemonIndexItem = (props) => {
  let pokemon = props.pokemon;
  return(
    <li>
      <Link to='/pokemon/:pokemonId'>
        <img src={pokemon.image_url} />
        {pokemon.name}
      </Link>
    </li>
  ); 
};

export default PokemonIndexItem;