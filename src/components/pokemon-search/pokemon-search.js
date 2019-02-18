import React from 'react'
import PokemonList from '../../services/pokemon-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pokemonsearch.css';
// import _ from 'lodash';

class PokemonSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {  
            pokemon:PokemonList.pokemon,
            list: [],
            pokemonSelected: null
           
        }
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
    if(e.keyCode === 13){
        this.props.selectPokemon(e.target.innerHTML.toLowerCase())
        console.log(e.key)
    }
}
   render(){
   return (
 <React.Fragment>
      <div className='header' onClick={e => this.clearDropdownList()}>
        <div className='red-display'></div>
          <div className='search-container'  >
           <div className='row' >
             <div className='col col-2' >
              <img className='logo-images1'src={require('../../assets/pokeball.png')} alt='pokemon'/></div>
               <div className='col col-8' >
                <h2 className='pokemon-title'>Pursuit Pokedex</h2>
                <input className='search-input' type='text'  onChange={this.dataSearch}  onClick={e => this.clearDropdownList()} placeholder="Search.." />
                {this.state.list.length === 0 ? null : this.state.list.map((poke, i)=> {
                    return <div onClick={this.handlePokemonSelected} onKeyDown={this.handlekeyDown} tabIndex="0" className='dropdown-item' key={i}>{poke}</div>
                })} 
                </div>  
                 <div className='col col-2'>
                  <img className='logo-images2'src={require('../../assets/pokeball.png')} alt='pokemon'/>
                   </div>
                </div>    
                <div style={{'position': 'absolute', 'zIndex': '100'}}></div>
            </div>       
         </div>
         <div > </div>
     
    </React.Fragment>
   ); 
   }
}    
export default PokemonSearch ; 