import PropTypes from "prop-types";
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ items, showModal }) {
  return items.map(item => {
    return (
      <li key={item.id} className={css.ImageGalleryItem}>
        <img
          onClick={()=>{showModal(item.largeImageURL, item.tags)}}
          data-bigimg={item.largeImageURL}
          className={css['ImageGalleryItem-image']}
          src={item.webformatURL}
          alt={item.tags}
        />
      </li>
    );
  });
}


ImageGalleryItem.propTypes = {
  items: PropTypes.array,
  showModal: PropTypes.func,
}