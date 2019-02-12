import React, { Component } from 'react';
import PokemonSearch from './components/pokemon-search';
import PokeCard from './components/pokemon-pokeCard';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <PokemonSearch />
      <PokeCard />
      </React.Fragment>
    );
  }
}

export default App;
