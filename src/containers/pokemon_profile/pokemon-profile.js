import React, {Component} from 'react'
import axios from 'axios'
import _ from 'lodash'
import BaseStats from '../../components/base-stats/base-stats'
import PokemonPicture from '../../components/pokemon-picture/pokemon-picture'
import PokemonSprites from '../../components/pokemon-sprites/pokemon-sprites'
import './pokemon-profile.css'

class PokemonProfile extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name:'',
            pokemon:'',
        }
    }

    componentDidMount () {
        axios.get(`https://pokeapi.co/api/v2/pokemon/1/`)
      .then(res => {
        const pokemon = res.data;
        this.setState({ 
            pokemon,
            name:pokemon.forms[0].name,
         });
        console.log(pokemon)
      })

    }
    render () {
        return (
            <div>
                <div>
                <span>Home</span> >> <span>{_.capitalize(this.state.name)}</span>
                </div>
                <h4># {_.padStart(this.state.pokemon.id,3,'0')} - {_.capitalize(this.state.name)}</h4>
                <div  className='container pokemon-picture-container '>
                    <PokemonPicture imageSrc={`https://img.pokemondb.net/artwork/${this.state.name}.jpg`} pokemonName={this.state.name} types={this.state.pokemon.types}/>
                </div>
                <PokemonSprites sprites={this.state.pokemon.sprites}/>
                <BaseStats baseStats={this.state.pokemon.stats} />
            </div>
        )
    }
}

export default PokemonProfile
