import React from 'react'
import _ from 'lodash'
import pokemonTypes from '../../services/pokemon-types'
import './pokemon-picture.css'

const renderTypes = (types) => {
    if(types) {
        return types.map((e,i) => {
            return <span className={`pokemon-type-label ${i!==0?'spacing-between':''}`}
            style={{backgroundColor:`#${pokemonTypes[_.capitalize(e.type.name)]}`}} 
            key={i}>{_.capitalize(e.type.name)}</span>
        })
    }
}
const PokemonPicture = (props) => {
    return (
        <React.Fragment>
        <div className='pokemon-picture-container'>
            <div className='row justify-content-center'>
                <img className='col-12 profile-img' src={props.imageSrc} alt={props.pokemonName} />
                <div className='col'style={{textAlign:'center'}}>
                    {renderTypes(props.types)}
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}


export default PokemonPicture