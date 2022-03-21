const router = require('express').Router();
const status = require('./status');
const keepalive = require('./keepalive');

router.use('/status', status);
router.use('/keepalive', keepalive);

module.exports = router;
