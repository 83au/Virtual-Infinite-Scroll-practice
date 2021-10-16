import { useState } from 'react';
import { useImages } from '../contexts/ImagesContext';

function SearchImagesForm() {
  const [inputVal, setInputVal] = useState('');
  const { setQuery } = useImages();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setQuery(inputVal)
  }

  const handleChange = evt => {
    setInputVal(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="keyword" 
        value={inputVal} 
        onChange={handleChange} 
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchImagesForm;
