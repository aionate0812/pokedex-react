import React, { Component } from 'react';
import PokemonProfile from './containers/pokemon_profile/pokemon-profile'
import PokemonSearch from './components/pokemon-search';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PokemonSearch />
       <PokemonProfile />
      </div>
    );
  }
}

export default App;
