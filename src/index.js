import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux 
import { Provider } from 'react-redux';
import store from './store/store';

// Css 
import './index.css';

// Component 
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode >
);
