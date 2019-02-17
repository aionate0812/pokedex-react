import React, { Component } from 'react';
import PokemonProfile from '../../containers/pokemon_profile/pokemon-profile'
import PokemonSearch from '../../components/pokemon-search';
import axios from 'axios'

class Pokedex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 'home',
            pokemonSelected: null,
        }
    }

    selectPokemon (pokemon) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => {
        const pokemon = res.data;
        this.setState({ 
            pokemonSelected:pokemon,
         });
      })
      // this.setState({
        //     pokemonSelected:pokemon,
        //     currentPage: pokemon,
        // })
        // setTimeout(()=>{console.log('pokemon selected now', this.state)},3000)
        
    }

    
  render() {
      
    return (
      <div>
      <PokemonSearch selectPokemon={this.selectPokemon.bind(this)} />
       {!this.state.pokemonSelected?'waiting for pokemon':<PokemonProfile pokemonSelected={this.state.pokemonSelected} />}
      </div>
    );
  }
}

export default Pokedex;
