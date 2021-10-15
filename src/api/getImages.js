import axios from 'axios';

const ORIGIN = 'https://api.unsplash.com/search/photos';
const URL = `${ORIGIN}?page=1`;

async function getImages(query, pageNum = 1) {
  const response = await axios.get(
    `${URL}?page=${pageNum}&query=${query}&client_id=${process.env.REACT_APP_KEY}`
  );
  const results = response.data.results;
  return results.map(item => item.urls.regular)
}

export default getImages;