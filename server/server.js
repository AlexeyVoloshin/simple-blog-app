const express = require('express');
const app = express();
const cors = require('cors');

const { render } = require('./render');
const path = require('path');

const port = 3000;

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
};

app.use(express.static(path.join(__dirname, '../build/')));
app.use(express.static(path.join(__dirname, '../assets/')));
app.use(express.static(path.join(__dirname, '../src/')));

app.use(cors(corsOptions));

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
