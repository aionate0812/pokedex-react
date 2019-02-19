import React from 'react'
// import _ from 'lodash'
import MovesModal from '../moves-modal/moves-modal';
import './moves.css'

const Moves = (props) => {
 
        return (   
            <div>
                <div className='moves-component'>
                    <h2>Moves</h2>
                        <div className='moves-container'>
                            <div style={{height:'5px'}}></div>
                            {props.moves.map((e,i)=>{
                            return <MovesModal  key={i} move={e.move} />
                            })}
                    </div>
                </div>
            </div>
        )
}

export default Moves

