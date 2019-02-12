import React from 'react'

const PokeCard = (props) => {
    return (
        <>
            {props.pokemon.map((e, i) => {
                return (
                <div className="col-12" style={{ "textAlign": "center",}} key={i}>
                    {e}
                </div>
                )
            })}
        </>
    )
}

export default PokeCard;