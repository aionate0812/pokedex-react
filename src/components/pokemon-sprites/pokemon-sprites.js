import React, {Component} from 'react'
import _ from 'lodash'

class PokemonSprites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sprite: ''
        }
    }

    handeMouseHover () {

    }
    renderSprites (sprites) {
        
        let newSprites = _.pickBy(sprites, e => e !== null)
        newSprites = _.map(newSprites, (value,keys) => {
            return <img key={keys} onMouseEnter={this.handeMouseHover} src={value} alt='' data-sprite={keys.includes('default'?'Default':'Shiny')}/>
        })  
        newSprites = _.reverse(newSprites)
        return [].concat(_.reverse(newSprites.slice(0,2)).concat(_.reverse(newSprites.slice(2))))
    }

    render () {
        return (
            <React.Fragment>
            <div>
            {this.renderSprites(this.props.sprites)}
            <h5>{this.state.sprite}</h5>
            </div>
            </React.Fragment>
        )
    }
    
}

export default PokemonSprites