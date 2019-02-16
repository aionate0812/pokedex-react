import React from 'react'
//import PokemonList from '../services/pokemon-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pokemonsearch.css'

class PokemonSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {  pokemon: [
            "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise",
            "Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata",
            "Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina",
            "Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff",
            "Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat",
            "Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine",
            "Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout",
            "Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke",
            "Slowbro","Magnemite","Magneton","Farfetch’d","Doduo","Dodrio","Seel","Dewgong", "Grimer","Muk","Shellder","Cloyster",
            "Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb", "Electrode","Exeggcute","Exeggutor","Cubone",
            "Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan",
            "Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx", "Electabuzz","Magmar","Pinsir", 
        ],
            list: [],
        }
    }

   
  
dataSearch = (e) =>{
     let querySearch = []; 
     if(e.target.value !== ''){
         this.state.pokemon.forEach((pokeData, i)=>{
            if(pokeData.toLowerCase().startsWith(e.target.value.toLowerCase().trim())){
                if(querySearch.length < 10){
                    querySearch.push(pokeData);   

                }
            }
         })
    }
    console.log(querySearch)
    this.setState({list: querySearch}); 
}
clearDropdownList = () => {
    this.setState({list: []})
}
   render(){
   return (
 <React.Fragment>
      <div className='header' onClick={e => this.clearDropdownList()}>
        <div className='red-display'></div>
          <div className='search-container' >
           <div className='row'>
             <div className='col col-2'>
              <img className='logo-images1'src={require('../assets/pokeball.png')} alt='pokemon'/></div>
               <div className='col col-8'>
                <h2 className='pokemon-title'>Pursuit Pokedex</h2>
                <input className='search-input' type='text'  onChange={this.dataSearch} onClick={e => this.clearDropdownList()} placeholder="Search.." />
                {this.state.list.length === 0 ? null : this.state.list.map(poke => {
                    return <div className='suggestBox dropdown-item '>{poke}</div>
                })}
                </div>
                 <div className='col col-2'>
                  <img className='logo-images2'src={require('../assets/pokeball.png')} alt='pokemon'/>
                   </div>
                </div>    
            </div>       
         </div>
     
    </React.Fragment>
   ); 
   }
}    
export default PokemonSearch ; 