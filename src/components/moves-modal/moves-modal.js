import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios'
import _ from 'lodash'
import './moves-modal.css'

class MovesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      move: this.props.move,
      moveInfo: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }),()=>{
        axios.get(this.state.move.url)
        .then((res)=>{
            let move  = res.data
            this.setState({
                moveInfo:move
            })
        })
    })
  }

  render() {
    return (
      <div className='moves-modal-label'>
        <Button color="info" onClick={this.toggle}>{_.startCase(_.replace(this.props.move.name,'-',' '))}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{_.startCase(_.replace(this.props.move.name,'-',' '))}</ModalHeader>
          {!this.state.moveInfo?<ModalBody></ModalBody>
            :<ModalBody>
            <p className='modal-body-label'>Type: {_.capitalize(this.state.moveInfo.type.name)}</p>
            <p className='modal-body-label'>Power: {_.capitalize(this.state.moveInfo.power)}</p>
            <p className='modal-body-label'>PP: {_.capitalize(this.state.moveInfo.pp)}</p>
          </ModalBody>
        }
        </Modal>
      </div>
    );
  }
}

export default MovesModal;