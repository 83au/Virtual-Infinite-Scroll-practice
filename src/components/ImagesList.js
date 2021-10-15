import { useState, useEffect, useCallback } from 'react'
import VirtualScroll from './VirtualScroll';
import InfiniteScroll from './InfiniteScroll';
import getImages from '../api/getImages';

function ImagesList({ query }) {
  const [pageNum, setPageNum] = useState(1);
  const [images, setImages] = useState([]);

  const nextPage = useCallback(() => {
    setPageNum(prevPageNum => prevPageNum + 1);
  }, []);

  useEffect(() => {
    const handleGetImages = async () => {
      const result = await getImages(query, pageNum);
      setImages(prevImages => [...prevImages, ...result]);
    }
    handleGetImages();
  }, [pageNum, query])

  const listItems = images.map((image, index) => (
    <li key={Math.random() * index} className="ImagesList__list-item">
      <VirtualScroll height={150}>
        <img src={image} alt="Unsplash" />
      </VirtualScroll>
    </li>
  ))

  return (
    <ul className="ImagesList">
      <InfiniteScroll listItems={listItems} lastRowHandler={nextPage} />
    </ul>
  )
}

export default ImagesList;
