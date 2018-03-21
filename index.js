const express = require('express');
const bodyParser = require('body-parser');
const router = require('./movie');

const app = express();

app.use((req, res, next) => {
  console.log('incoming request');
  //res.send('foo');
  next();
});

app.use(express.static('public'));

// BODY PARSER
app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // req.body => formular
  res.send('Hallo Welt');
});

app.get('/test/:id', (req, res) => {
  console.log(req.params.id);
  res.redirect('/movie/');
});

app.use('/movie', router);

const listener = app.listen(8080, () => {
  console.log(
    'Express is listening http://localhost:' + listener.address().port,
  );
});
