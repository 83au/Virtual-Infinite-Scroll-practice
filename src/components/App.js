import { useState } from 'react';
import Form from './Form';
import ImagesList from './ImagesList';

function App() {
  const [query, setQuery] = useState('');
  return (
    <div className="App">
      <Form setQuery={setQuery} />
      <ImagesList query={query} />
    </div>
  );
}

export default App;
