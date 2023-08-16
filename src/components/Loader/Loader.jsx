import { ProgressBar } from 'react-loader-spinner';
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.wrapperBox}>
    <ProgressBar
  height="80"
  width="180"
  ariaLabel="progress-bar-loading"
  
  wrapperClass="progress-bar-wrapper"
  borderColor = '#0434f2'
  barColor = '#f4d004'
/>
</div>
  );
}
