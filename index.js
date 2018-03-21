const express = require('express');

const router = require('./movie');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
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
