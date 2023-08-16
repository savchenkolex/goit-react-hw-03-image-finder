import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ items }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css["ImageGalleryItem-image"]} src="" alt={items} />
    </li>
  );
}
