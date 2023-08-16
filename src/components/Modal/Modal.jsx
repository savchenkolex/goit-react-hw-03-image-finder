import css from './Modal.module.css';

export default function Modal({image, alt}) {
  return (
    <div className={css.Owerlay}>
      <div className={css.Modal}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}
