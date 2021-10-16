import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import getImages from '../api/getImages';

const ImagesContext = createContext();

function ImagesContextProvider({ children }) {
  const [pageNum, setPageNum] = useState(1);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  const nextPage = useCallback(() => {
    setPageNum(prevPageNum => prevPageNum + 1);
  }, []);

  useEffect(() => {
    const handleGetImages = async () => {
      const result = await getImages(query, pageNum);
      setImages(prevImages => [...prevImages, ...result]);
    }
    if (query === '') return;
    handleGetImages();
  }, [pageNum, query]);

  const context = { 
    setQuery,
    images,
    nextPage
  }

  return (
    <ImagesContext.Provider value={context}>
      { children }
    </ImagesContext.Provider>
  )
}

export default ImagesContextProvider;

export function useImages() {
  const context = useContext(ImagesContext);
  return context;
}
