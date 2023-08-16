import css from './ImageGallery.module.css';

export default function ImageGallery({ children }) {
  return <ul class={css.ImageGallery}>{children}</ul>;
}
