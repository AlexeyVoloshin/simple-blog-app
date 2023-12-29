import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';

const app = express();
const port = 3000;

app.get('/*', (req, res) => {
  const entryPoint = ['../src/index.js'];

  const { pipe, abort: _abort } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: entryPoint,
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send('<!DOCTYPE html><p>Loading...</p>');
      },
    }
  );
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
