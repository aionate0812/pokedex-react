import React, { Component } from 'react';
import  Pokecard  from '../../components/pokemon-master-list'
import axios from 'axios';

class PokemonMasterList extends Component {
    constructor(props) {
        super(props)  

        this.state = {
            pokeList: [],
            pokeError: {
                status: false,
                msg: '',
            },
            pokeDisplay: null
        }
    }

    handlePokemonSelected (e) { 
        this.props.selectPokemon(e.target.children[1].innerHTML.toLowerCase())
    }

    pokeLoad = () =>{
        let pokeOffset = 0
        let pokeLimit = 20
        if(this.state.pokeList.length !== 0){
            pokeOffset = (this.state.pokeList.length + 20)
        }
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pokeOffset}&limit=${pokeLimit}`)
        .then(data=>{
            this.setState({pokeList: [].concat(this.state.pokeList, data.data.results)})
        })
        .catch(err=>{
            this.setState({pokeError: {status: true, msg:"Sorry Couldn't Catch 'Em All"}})
        })
    }

    pokeReset = () => {
        this.setState({pokeList: []})
    }

    componentDidMount() {
        this.pokeLoad()
    }

    render() {
        return (
            <>
                <div className="container" style={{"marginBottom":"20px","marginTop":"30px"}}>
                    <div className="flex-row" >
                        <Pokecard pokeReset={this.pokeReset} pokeLoad={this.pokeLoad} pokeState={this.state} handlePokemonSelected={this.handlePokemonSelected.bind(this)}/>
                    </div>
                </div>
            </>
        )
    }
}


export { PokemonMasterList }