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

    componentDidMount () {
      if(!localStorage.getItem('pokemons')){
      localStorage.setItem('pokemons',JSON.stringify({}))
      localStorage.setItem('moves',JSON.stringify({}))
      }
      
    }

    selectPokemon (pokemon) {
      let localPokemons = localStorage.getItem('pokemons')
      localPokemons = JSON.parse(localPokemons)
      console.log(localPokemons)

      if(localPokemons.pokemon){
        this.setState({ 
          pokemonSelected:pokemon,
       });
      } else {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => {
        const pokemon = res.data;
        this.setState({ 
            pokemonSelected:pokemon,
         },()=>{
           localPokemons[pokemon.name] = pokemon
           
           localStorage.setItem('pokemons',JSON.stringify(localPokemons))
         })
      })
    }
    }

    homePageViewer = () => {
      this.setState({pokemonSelected: null})
    }

    
  render() {
      
    return (
      <div>
      <PokemonSearch selectPokemon={this.selectPokemon.bind(this)}/>
       {!this.state.pokemonSelected?
       <PokemonMasterList />
        :<PokemonProfile pokemonSelected={this.state.pokemonSelected} homePageViewer={this.homePageViewer}/>}
      </div>
    );
  }
}

export default Pokedex;
