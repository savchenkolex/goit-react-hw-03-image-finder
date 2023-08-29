import { Component } from 'react';
import PropTypes from "prop-types";
import css from './Modal.module.css';

export default class Modal extends Component {
  
  modalKeyboardHandler = (event) => {
    if(event.code === "Escape") {
      this.props.closeModal();
    }
  } 

  modalMouseHandler = (event) => {
    if(event.target.nodeName === "IMG"){
      return;
    }
    this.props.closeModal();
  }

  componentDidMount () {
    document.addEventListener('keydown', this.modalKeyboardHandler);
    
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.modalKeyboardHandler);
   
  }
  render() {
    return (
      <div className={css.Overlay} onClick={this.modalMouseHandler}>
        <div className={css.Modal}>
          <img src={this.props.image} alt={this.props.alt} />
          <div><p>{this.props.alt}</p></div>
        </div>
      </div>
    );
  }
}


Modal.propTypes = {
  closeModal: PropTypes.func,
  image: PropTypes.string,
  alt: PropTypes.string,
}