const express = require('express');
const controller = require('./controller');

const router = express.Router();

// req.url: /movie/
router.get('/', controller.listAction);
// req.url: /movie/delete/1
router.get('/delete/:id', controller.deleteAction);

module.exports = router;
