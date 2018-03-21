const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const movies = model.getAll();
  const renderedView = view(movies);
  res.render(__dirname + '/list.ejs', { movies, baseUrl: req.baseUrl });
}

function deleteAction(req, res) {
  const id = parseInt(req.params.id, 10);
  model.delete(id);
  res.redirect(req.baseUrl);
}

// Schritt 2 neue Action
// Schritt 3 neues Template
// Schritt 4 erweiterung Model
// Schritt 5 weiterleitung auf Liste

module.exports = { listAction, deleteAction };
