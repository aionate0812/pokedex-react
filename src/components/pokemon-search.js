import React from 'react'
//import PokemonList from '../services/pokemon-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pokemonsearch.css'


const PokemonSearch = props => {
   return (
 <React.Fragment>
      <div className='header'>
        <div className='red-display'></div>
          <div className='container' >
           <div className='row'>
             <div className='col col-2'>
              <img className='logo-images1'src={require('../assets/pokeball.png')} /></div>
               <div className='col col-8'>
                <h2 className='pokemon-title'>Pursuit Pokedex</h2>
                <input className='search-input'type="text" placeholder="Search.."></input>
                </div>
                 <div className='col col-2'>
                  <img className='logo-images2'src={require('../assets/pokeball.png')} />
                   </div>
                </div>    
            </div>       
         </div>

    </React.Fragment>
   ); 
}


export default PokemonSearch ; 