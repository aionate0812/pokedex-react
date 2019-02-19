import React from 'react';
import _ from 'lodash';
import song from '../assets/music.mp3'
import image from '../assets/teamRocket.jpg'
import shocked from '../assets/shocked.jpg'
import './pokemon-master-list.css'
import InfiniteScroll from 'react-infinite-scroller'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"

const PokeCard = (props) => {
    if (props.pokeState.pokeError.status) {
        return (
            <>
                <div className="col-12 textAlign">
                    <audio src={song} autoPlay></audio>
                    <img style={{ "height": "400px" }} src={image} alt={''} />
                </div>
                <div className="col-12 textAlign">
                    {props.pokeState.pokeError.msg}
                </div>
            </>
        )
    }
    return (
        <>
            {props.pokeState.pokeList.map((e, i) => {
                return (
                    <button className="col-12 textAlign buttonStyle curser" onClick={props.handlePokemonSelected} key={i}>
                        
                            <img className="leftFloat" src={`https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`} alt={''} onError={(e) => { e.target.onerror = null; e.target.src = shocked; e.target.style = 'justifyContent:center;height:30px;width:40px' }} />
                        
                        <span className="leftFloat textStyling leftPad">{_.capitalize(e.name)}</span>
                        <span className="rightFloat textStyling rightPad">#  {_.padStart(i + 1, 3, '0')}</span>
                    </button>
                )
            })}
            <InfiniteScroll
                pageStart={0}
                loadMore={props.pokeLoad}
                hasMore={true || false}
                loader={""}>
                {""}
            </InfiniteScroll>
            <div>
                <ScrollUpButton />
            </div>
        </>
    )
}

export default PokeCard;