import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { App } from '../src/App.jsx';

export const render = response => {
  const stream = renderToPipeableStream(<App />, {
    bootstrapScripts: ['http://localhost:8080/scripts/bundle.js'],
    onShellReady() {
      response.setHeader('content-type', 'text/html');
      stream.pipe(response);
    },
    onError(error) {
      console.error(error);
      logServerCrashReport(error);
    },
  });
};
