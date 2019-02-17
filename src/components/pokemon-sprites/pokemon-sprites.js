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
        newSprites = _.reverse(newSprites)
        
        return [].concat(_.reverse(newSprites.slice(0,2)).concat(_.reverse(newSprites.slice(2))))
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