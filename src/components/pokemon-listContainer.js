import React from 'react';



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