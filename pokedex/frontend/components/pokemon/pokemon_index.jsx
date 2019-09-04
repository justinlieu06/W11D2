import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    let pokemon  = this.props.pokemon;
    
    const pokemonItems = pokemon.map(pokemon => (
      <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
    ));
    return(
      <section className="pokedex">
        <ul>{pokemonItems}</ul>
      </section>
    );
  }
}

export default PokemonIndex;