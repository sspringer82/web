const express = require('express');
const controller = require('./controller');

const router = express.Router();

// req.url: /movie/
router.get('/', controller.listAction);
// req.url: /movie/delete/1
router.get('/delete/:id', controller.deleteAction);

router.get('/form', controller.formAction);
router.post('/save', controller.saveAction);

module.exports = router;
