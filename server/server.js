const express = require('express');
const app = express();
const cors = require('cors');

const { render } = require('./render');
const path = require('path');

const port = 3000;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../build/')));
app.use(express.static(path.join(__dirname, '../assets/')));
app.use(express.static(path.join(__dirname, '../src/')));

app.get('/', (req, res) => {
  render(req, res);
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
/* --------------- 
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.server.config.js');
const cors = require('cors');

const app = express();
const compiler = webpack(config);

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const serverOptions = {
  publicPath: config.output.publicPath,
  stats: { colors: true },
};

app.use(cors(corsOptions));

const devMiddleware = webpackDevMiddleware(compiler, serverOptions);

app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler));

const PORT = 4000;

app.listen(PORT, error => {
  if (error) {
    return console.error(error);
  } else {
    console.log(`HMR server listening on http://localhost:${PORT}`);
  }
});



*/
