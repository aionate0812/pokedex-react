import React from 'react'


const PokemonPicture = (props) => {
    return (
        <React.Fragment>
        <div>
        <img src={props.imageSrc} alt={props.pokemonName} />
        {props.types.map((e,i) => {
            return <p key={i}>{e}</p>
        })}
        </div>
        </React.Fragment>
    )
}


export default PokemonPicture