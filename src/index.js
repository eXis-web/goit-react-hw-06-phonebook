import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-06-phonebook">
    <React.StrictMode>
     <App />
    </React.StrictMode>
  </BrowserRouter>
);
