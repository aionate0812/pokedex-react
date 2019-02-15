import React from 'react'
// import _ from 'lodash'
import MovesModal from '../moves-modal/moves-modal';

class Moves extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moves: this.props.moves
        }
    }
 
    
    render () {
        console.log(this.state.moves)
        return (
            <div>
            <div style={{marginTop:'50px'}}>
            <h2>Moves</h2>
                <div style={{paddingTop:'5px',overflow:'auto', width:'100%',height:'50px', whiteSpace:'nowrap',display:'inline-block'}} className=''>
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

//<p key={i} style={{display:'inline-block'}}><span style={{marginRight:'15px',borderRadius:'5px',border:'1px solid black',padding:'5px 20px 5px 20px'}}>{_.replace(e.move.name,'-',' ')}</span></p>