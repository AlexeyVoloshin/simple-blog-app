import { App } from './app';
import { createRoot } from 'react-dom/client';

import React from 'react';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
  module.hot.accept();
}
