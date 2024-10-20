const express = require('express');
const path = require('path');
const compression = require('compression')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const { APOD } = require('../shared/mocks/mocks');


app.use(cors())
// app.use(compression())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/apod', (req, res) => {
  setTimeout(() => res.json(APOD), 300)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port: http://localhost:${port}`));
