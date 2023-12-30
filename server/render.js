import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { App } from '../src/App.jsx';

export const render = response => {
  const stream = renderToPipeableStream(<App />, {
    bootstrapScripts: ['/server.bundle.js'],
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
