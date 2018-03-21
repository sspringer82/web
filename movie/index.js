const express = require('express');
const controller = require('./controller');

const router = express.Router();

// req.url: /movie/
router.get('/', controller.listAction);

module.exports = router;
