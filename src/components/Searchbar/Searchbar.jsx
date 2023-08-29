import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  submitHandler = event => {
    event.preventDefault();
    const query = event.currentTarget[1].value;
    this.props.queryHandler(query);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.submitHandler}>
          <button type="submit" className={css['SearchForm-button']}>
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  queryHandler: PropTypes.func,
};
