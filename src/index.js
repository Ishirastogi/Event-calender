import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { EventProvider } from './context/EventContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EventProvider>
        <App />
      </EventProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
