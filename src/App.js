import React, { Component } from 'react';
import PokemonProfile from './containers/pokemon_profile/pokemon-profile'
class App extends Component {
  render() {
    return (
      <div className="App">
       <PokemonProfile />
      </div>
    );
  }
}

export default App;
