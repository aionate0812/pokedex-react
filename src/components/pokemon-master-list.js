import React from 'react';
import _ from 'lodash';
import song from '../assets/music.mp3'
import image from '../assets/teamRocket.jpg'

const PokeCard = (props) => {
    if (props.pokeState.pokeError.status) {
        return (
            <>
                <div className="col-12" style={{ "textAlign": "center", }}>
                    <audio src={song} autoPlay></audio>
                    <img style={{ "height": "400px" }} src={image} alt={''} />
                </div>
                <div className="col-12" style={{ "textAlign": "center", }}>
                    {props.pokeState.pokeError.msg}
                </div>
            </>
        )
    }
    return (
        <>
            {props.pokeState.pokeList.map((e, i) => {
                return (
                    <div className="col-12" style={{"minHeight":"40px", "textAlign": "center", "border":"solid 1px black", "marginTop":"5px", "marginBottom":"5px", "borderRadius":"5px" }} key={i}>
                        <span style={{ "float": "left", }}>
                            <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`} alt={''} onError={(e) => { e.target.onerror = null; e.target.src = "https://i.imgur.com/sohWhy9.jpg"; e.target.style = 'height:25px;width:35px' }} />
                        </span>
                        <span style={{ "float": "left", "color":"blue", "paddingTop":"5px", "paddingLeft":"40px"}} onClick={props.handlePokemonSelected}>{_.capitalize(e.name)}</span>
                        <span style={{ "float": "right", "color":"blue", "paddingTop":"5px", "paddingRight":"40px"}}>#  {_.padStart(i + 1, 3, '0')}</span>
                    </div>
                )
            })}
            <button className="col-12" style={{"width":"100%","backgroundColor":"red", "color":"white", "textAlign":"center", "cursor":"pointer","border":"red","borderRadius":"5px","display":props.pokeState.pokeDisplay}} onClick={props.pokeState.pokeLoad}>
                Load More...
            </button>
        </>
    )
}

export default PokeCard;