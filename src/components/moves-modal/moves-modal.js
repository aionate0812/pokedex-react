import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios'
import _ from 'lodash'

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
      <div style={{display:'inline-block', marginRight:'15px'}}>
        <Button color="info" onClick={this.toggle}>{_.startCase(_.replace(this.props.move.name,'-',' '))}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{_.startCase(_.replace(this.props.move.name,'-',' '))}</ModalHeader>
          {!this.state.moveInfo?<ModalBody></ModalBody>
            :<ModalBody>
            <p>Type: {_.capitalize(this.state.moveInfo.type.name)}</p>
            <p>Power: {_.capitalize(this.state.moveInfo.power)}</p>
            <p>PP: {_.capitalize(this.state.moveInfo.pp)}</p>
          </ModalBody>
        }
        </Modal>
      </div>
    );
  }
}

export default MovesModal;