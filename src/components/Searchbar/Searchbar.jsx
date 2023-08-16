import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  return (
    <header class={css.Searchbar}>
      <form class={css.SearchForm} onSubmit={(event)=>{onSubmit(event)}}>
        <button type="submit" class={css["SearchForm-button"]}>
          <span class={css["button-label"]}>Search</span>
        </button>

        <input
          class={css["SearchForm-input"]}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
