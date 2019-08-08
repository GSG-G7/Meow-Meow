
const express = require('express');

const {get} = require('./request');
const { post }  = require('./request');

const { clientError, serverError } = require('./error');

const router = express.Router();

router.post('/search',post);
router.get('/', get);
router.use(clientError);
router.use(serverError);

module.exports = router;