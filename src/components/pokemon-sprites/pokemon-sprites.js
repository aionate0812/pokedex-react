import React, {Component} from 'react'
import _ from 'lodash'
import './pokemon-sprites.css'

class PokemonSprites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sprite: ''
        }
    }

    handleMouseHover (e) {
        let newSprite = ''
        newSprite = e.target.dataset.sprite
        this.setState({sprite:(newSprite)})
    }
    renderSprites (sprites) {
        let newSprites = _.pickBy(sprites, e => e !== null)
        newSprites = _.map(newSprites, (value,keys) => {
            return <img key={keys} onMouseEnter={this.handleMouseHover.bind(this)} src={value} alt='' data-sprite={keys.includes('shiny')?'Shiny':'Default'}/>
        })  

        newSprites = newSprites.slice(Math.floor(newSprites.length/2)).concat(newSprites.slice(0,Math.floor(newSprites.length/2)))

        if(newSprites.length>4){
            let temp = _.reverse(newSprites.splice(1,2))
            newSprites.splice(1,0,temp)
            temp = _.reverse(newSprites.splice(4,2))
            newSprites.splice(4,0,temp)
        } 
        return newSprites
    }

    render () {
        return (
            <React.Fragment>
            <div className='sprites-container'>
            {this.renderSprites(this.props.sprites)}
            <h5>{this.state.sprite}</h5>
            </div>
            </React.Fragment>
        )
    }
    
}

export default PokemonSprites