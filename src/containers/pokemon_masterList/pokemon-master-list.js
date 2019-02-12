import React, { Component } from 'react';
import  Pokecard  from '../../components/pokemon-master-list'

class PokemonMasterList extends Component {
    constructor(props) {
        super(props)  

        this.state = {
            pokemon: [1,2,3,4,5],
        }
    }

    pokeLoad = () =>{
        this.setState({pokemon: this.state.pokemon.concat(this.state.pokemon[this.state.pokemon.length - 1]+1)})
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <div className="container" style={{"width":"50%"}}>
                    <div className="row">
                        <Pokecard pokemon={this.state.pokemon}/>
                        <button className="col-6" style={{"backgroundColor":"red", "color":"white", "textAlign":"center", "cursor":"pointer"}} onClick={this.pokeLoad}>
                            Load More...
                        </button>
                    </div>
                </div>
            </>
        )
    }
}


export { PokemonMasterList }