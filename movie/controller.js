const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const movies = model.getAll();
  const renderedView = view(movies);
  res.render(__dirname + '/list.ejs', { movies });
}

function deleteAction(req, res) {
  const id = parseInt(req.params.id, 10);
  model.delete(id);
  res.redirect('/movie');
}
module.exports = { listAction, deleteAction };
