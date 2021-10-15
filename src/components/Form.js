import { useState } from 'react';

function Form({ setQuery }) {
  const [inputVal, setInputVal] = useState('');

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

export default Form;
