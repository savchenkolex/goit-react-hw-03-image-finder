import PropTypes from "prop-types";
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={(event)=>{onSubmit(event)}}>
        <button type="submit" className={css["SearchForm-button"]}>
          <span className={css["SearchForm-button-label"]}>Search</span>
        </button>

        <input
          className={css["SearchForm-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}