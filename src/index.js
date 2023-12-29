import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

hydrateRoot(
  document,
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <div>Hi</div>
    </BrowserRouter>
  </React.StrictMode>
);
