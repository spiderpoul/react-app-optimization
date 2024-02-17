const express = require('express');
const path = require('path');
const compression = require('compression')
const app = express();
const bodyParser = require('body-parser');
const { APOD } = require('./mocks');


app.use(compression())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/apod', (req, res) => {
  res.json(APOD)
})

app.listen(process.env.PORT || 8080);
