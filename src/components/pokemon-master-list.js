import React from 'react';
import _ from 'lodash';

const PokeCard = (props) => {
    
    if (props.pokeState.pokeError.status) {
        return (
            <>
                    <div className="col-12" style={{ "textAlign": "center",}}>
                        <img style={{"height":"400px"}} src={`https://d30g5rxy3ee0r1.cloudfront.net/wp-content/uploads/2015/10/95052_by_KM8527-FrostfireVX_1443825047_teamrocket.jpg`} alt={''}/>
                    </div>
                    <div className="col-12" style={{ "textAlign": "center",}}>
                        {props.pokeState.pokeError.msg}
                    </div>
            </>
        )
    }
    return (
        <>
            {props.pokeState.pokeList.map((e, i) => {
                return (
                <div className="col-12" style={{ "textAlign": "center",}} key={i}>
                    <span style={{ "float": "left",}}>
                    <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`} alt={''} onError={(e)=> {e.target.onerror = null; e.target.src="https://i.imgur.com/sohWhy9.jpg"; e.target.style='height:25px;width:35px'}} />
                    </span>
                    <span style={{ "float": "left",}}>{e.name}</span>
                    <span style={{ "float": "right",}}>{_.padStart(i+1, 3, '0')}</span>
                </div> 
                )
            })}
        </>
    )
}

export default PokeCard;