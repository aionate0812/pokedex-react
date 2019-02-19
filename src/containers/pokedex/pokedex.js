import React, { Component } from 'react';
import PokemonProfile from '../../containers/pokemon_profile/pokemon-profile'
import {PokemonMasterList} from '../pokemon_masterList/pokemon-master-list.js'
import PokemonSearch from '../../components/pokemon-search/pokemon-search';
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

    homePageViewer = () => {
      this.setState({pokemonSelected: null})
    }

    
  render() {
      
    return (
      <div>
      <PokemonSearch selectPokemon={this.selectPokemon.bind(this)}/>
       {!this.state.pokemonSelected?
       <PokemonMasterList selectPokemon={this.selectPokemon.bind(this)}/>
        :<PokemonProfile pokemonSelected={this.state.pokemonSelected} homePageViewer={this.homePageViewer}/>}
      </div>
    );
  }
}

export default Pokedex;
