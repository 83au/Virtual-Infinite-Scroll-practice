import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ImagesContextProvider from './contexts/ImagesContext';

import './index.css';

ReactDOM.render(
  <ImagesContextProvider>
    <App />
  </ImagesContextProvider>,
  document.getElementById('root')
);


