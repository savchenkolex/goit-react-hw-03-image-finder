import PropTypes from "prop-types";
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '37520617-5f1d4ae88891232aac6329fff';

export async function getImages(query, page) {
  return await axios.get(
    `${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  );
}

getImages.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
}