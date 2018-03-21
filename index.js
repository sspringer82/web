const express = require('express');

const router = require('./movie');

const app = express();

app.get('/', (req, res) => {
  res.send('Hallo Welt');
});

app.use('/movie', router);

const listener = app.listen(8080, () => {
  console.log(
    'Express is listening http://localhost:' + listener.address().port,
  );
});
