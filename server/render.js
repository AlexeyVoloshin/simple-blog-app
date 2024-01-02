import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from '../src/App.jsx';

export const render = (request, response) => {
  const entryPoint = ['http://localhost:8080/scripts/bundle.js'];
  const { pipe, abort: _abort } = renderToPipeableStream(
    <StaticRouter location={request.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: entryPoint,
      onShellReady() {
        response.statusCode = 200;
        response.setHeader('content-type', 'text/html');
        pipe(response);
      },
      onShellError() {
        res.statusCode = 500;
        res.send('<!doctype html><p>Loading...</p>');
      },
    }
  );
};
