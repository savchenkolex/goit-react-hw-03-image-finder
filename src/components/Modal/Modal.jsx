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
    document.addEventListener('click', this.modalMouseHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.modalKeyboardHandler);
    document.removeEventListener('click', this.modalMouseHandler);
  }
  render() {
    return (
      <div className={css.Overlay} onClick={this.props.showModal}>
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