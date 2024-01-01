const express = require('express');
const path = require('path');
const app = express();
const { render } = require('./render');

const port = 3000;

app.use(express.static(path.join(__dirname, '../build/')));
app.use(express.static(path.join(__dirname, '../assets/')));
app.use(express.static(path.join(__dirname, '../src/')));

app.get('/', (req, res) => {
  render(res);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
