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

function formAction(req, res) {
  res.render(__dirname + '/form.ejs');
}
function saveAction(req, res) {
  model.save(req.body);
  res.redirect(req.baseUrl);
}

module.exports = {
  listAction,
  deleteAction,
  formAction,
  saveAction,
};
