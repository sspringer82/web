const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hallo Welt');
});

app.listen(8080, () => {
  console.log('Express is listening http://localhost:8080');
});
