const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const movies = model.getAll();
  const renderedView = view(movies);
  res.send(renderedView);
}
module.exports = { listAction };
