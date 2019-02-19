import React from 'react'
import PokemonList from '../../services/pokemon-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pokemonsearch.css';
import song from '../../assets/pokeTheme.mp3'
// import _ from 'lodash';

class PokemonSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {  
            pokemon:PokemonList.pokemon,
            list: [],
            pokemonSelected: null,
            play: false,
            pause: true, 
        }
        this.url = song;
        this.audio = new Audio(this.url);
    }

    play = () => {
        this.setState({ play: true, pause: false })
        this.audio.play();
    }
        
    pause = () => {
        this.setState({ play: false, pause: true })
        this.audio.pause();
    }
   
  
dataSearch = (e) =>{
     let querySearch = []; 
     if(e.target.value !== ''){
         this.state.pokemon.forEach((pokeData, i)=>{
            if(pokeData.toLowerCase().includes(e.target.value.toLowerCase().trim())){
                if(querySearch.length < 10){
                    querySearch.push(pokeData);   

                }
            }
         })
    }
    
    this.setState({list: querySearch}); 
}
clearDropdownList = () => {
    this.setState({list: []})
}

handlePokemonSelected =(e) => { 
    this.props.selectPokemon(e.target.innerHTML.toLowerCase())
}
handlekeyDown = (e)=>{
    if(e.keyCode === 13 && e.target.parentNode.children[2]){
        let pokemon = e.target.parentNode.children[2].children[0].innerHTML.toLowerCase()
        this.props.selectPokemon(pokemon)
        this.setState({list: []})
    }
}


   render(){
   return (
 <React.Fragment>
      <div className='header' onClick={e => this.clearDropdownList()}>
        <div className='red-display'></div>
          <div className='search-container'  >
           <div className='row' >
             <div className='col col-4' >
              <img className='logo-images1' onClick={this.play} src={require('../../assets/pokeball.png')} alt='pokemon'/></div>
               <div className='col col-4' >
                <h2 className='pokemon-title'>Digidex</h2>

                <input className='search-input' type='text'  onChange={this.dataSearch} onKeyDown={this.handlekeyDown} onClick={e => this.clearDropdownList()} placeholder="Search.." />
                {this.state.list.length === 0 ? null :
                <div className='dropdown-item'>
                    {this.state.list.map((poke, i)=> {
                    return <div className='curser colorChange' onClick={this.handlePokemonSelected} tabIndex="0" key={i}>{poke}</div>
                })}
                </div>
                } 
                </div>  
                 <div className='col col-4'>
                  <img className='logo-images2' onClick={this.pause} src={require('../../assets/pokeball.png')} alt='pokemon'/>
                   </div>
                </div>    
                <div style={{'position': 'absolute', 'zIndex': '100'}}></div>
            </div>       
         </div>
         <div> 
         </div>
     
    </React.Fragment>
   ); 
   }
}    
export default PokemonSearch ; 