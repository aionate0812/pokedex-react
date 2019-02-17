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

    pokeLoad = () =>{
        let pokeOffset = 0
        let pokeLimit = 20
        if(this.state.pokeList.length !== 0){
            pokeOffset = (this.state.pokeList.length + 20)
        }
        if(this.state.pokeList.length >= 940){
            pokeLimit = 4
            this.setState({pokeDisplay: "hidden"})
        }
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pokeOffset}&limit=${pokeLimit}`)
        .then(data=>{
            console.log(data.data.results)
            this.setState({pokeList: [].concat(this.state.pokeList, data.data.results)})
        })
        .catch(err=>{
            console.log(err)
            this.setState({pokeError: {status: true, msg:"Sorry Couldn't Catch 'Em All"}})
        })
    }

    componentDidMount() {
        this.pokeLoad()
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <Pokecard pokeState={this.state}/>
                        <button className="col-12" style={{"width":"100px","backgroundColor":"red", "color":"white", "textAlign":"center", "cursor":"pointer","visibility":this.state.pokeDisplay}} onClick={this.pokeLoad}>
                            Load More...
                        </button>
                    </div>
                </div>
            </>
        )
    }
}


export { PokemonMasterList }