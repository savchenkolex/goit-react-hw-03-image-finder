import css from './Button.module.css';

export default function Button({ loadMoreImages }) {
  return (
    <div>
      <button className={css.Button} onClick={loadMoreImages} type="button">
        Load More
      </button>
    </div>
  );
}
