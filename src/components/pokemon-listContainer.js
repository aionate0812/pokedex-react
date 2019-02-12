import React from 'react';
import PokeCard from './pokemon-pokeCard';
import './pokemon-list.css';

const PokemonListContainer = props =>{
    return (
        <React.Fragment>
            <div className='container list'>
              <div className='row'>
                <PokeCard  />
              </div>
            </div>
        </React.Fragment>
    );
}

export default PokemonListContainer; 