import { Component } from 'react';
import PropTypes from "prop-types";
import css from './Modal.module.css';

export default class Modal extends Component {
  
  componentDidMount () {
    document.addEventListener('keydown', event => {
      if(event.code === "Escape") {
        this.props.showModal(event)
      }  
    })
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
  showModal: PropTypes.func,
  image: PropTypes.string,
  alt: PropTypes.string,
}