import React from 'react'
// import _ from 'lodash'
import MovesModal from '../moves-modal/moves-modal';
import './moves.css'

class Moves extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moves: this.props.moves
        }
    }
 
    
    render () {
        return (
            <div>
                <div className='moves-component'>
                    <h2>Moves</h2>
                        <div className='moves-container'>
                            <div style={{height:'5px'}}></div>
                            {this.state.moves.map((e,i)=>{
                            return <MovesModal  key={i} move = {e.move} />
                            })}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Moves

