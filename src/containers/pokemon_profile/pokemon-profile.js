import React from 'react'
import _ from 'lodash'
import BaseStats from '../../components/base-stats/base-stats'
import PokemonPicture from '../../components/pokemon-picture/pokemon-picture'
import PokemonSprites from '../../components/pokemon-sprites/pokemon-sprites'
import Moves from '../../components/moves/moves'
import './pokemon-profile.css'

const PokemonProfile = (props) => {

    return (
        
                    <div className='container'>
                        <div className='d-flex flex-row'>
                            <p className='p-2'><span onClick={props.homePageViewer} className='home-button'>Home</span> >> <span>{_.capitalize(props.pokemonSelected.name)}</span></p>
                            <h3 style={{marginTop:'20px'}} className='ml-auto p-2'># {_.padStart(props.pokemonSelected.id,3,'0')} - {_.capitalize(props.pokemonSelected.name)}</h3>
                        </div>
                        <div className='row justify-content-between'>
                                <div className='col-4 img-center'>
                                        <PokemonPicture imageSrc={`https://img.pokemondb.net/artwork/${props.pokemonSelected.name}.jpg`} pokemonName={props.pokemonSelected.name} types={props.pokemonSelected.types}/>
                                </div>
                                <div className='break-new-line'></div>
                                <div className='col-8 align-self-center center-content'>
                                    <PokemonSprites sprites={props.pokemonSelected.sprites}/>
                                </div>
                        </div>
                        <BaseStats baseStats={props.pokemonSelected.stats} />
                        {<Moves moves={props.pokemonSelected.moves}/>}
                    </div>
                )

}

export default PokemonProfile

// class PokemonProfile extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             pokemon:this.props.pokemonSelected,
//         }
//     }

    
//     // componentDidMount () {
//     //     axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonSelected}/`)
//     //   .then(res => {
//     //     const pokemon = res.data;
//     //     this.setState({ 
//     //         pokemon,
//     //         name:pokemon.forms[0].name,
//     //      });
//     //     console.log('profile',pokemon.forms[0].name)
//     //   })

//     // }


//     render () {
//         console.log('pokemon profile',this.state.pokemon.name)
//         return (
//             <div className='container'>
//                 <div className='d-flex flex-row'>
//                     <p className='p-2'><span>Home</span> >> <span>{_.capitalize(this.state.pokemon.name)}</span></p>
//                     <h3 style={{marginTop:'20px'}} className='ml-auto p-2'># {_.padStart(this.state.pokemon.id,3,'0')} - {_.capitalize(this.state.name)}</h3>
//                 </div>
//                 <div className='row justify-content-between'>
//                         <div className='col-4 img-center'>
//                                 <PokemonPicture imageSrc={`https://img.pokemondb.net/artwork/${this.state.pokemon.name}.jpg`} pokemonName={this.state.name} types={this.state.pokemon.types}/>
//                         </div>
//                         <div className='break-new-line'></div>
//                         <div className='col-8 align-self-center center-content'>
//                             <PokemonSprites sprites={this.state.pokemon.sprites}/>
//                         </div>
//                 </div>
//                 <BaseStats baseStats={this.state.pokemon.stats} />
//                 {this.state.pokemon.moves?<Moves moves={this.state.pokemon.moves}/>:<p>Loading</p> }
//             </div>
//         )
//     }
// }

// export default PokemonProfile
