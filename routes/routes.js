const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

// Get username and roomname from form and pass it to room
router.post('/room', controller.postRoom);


router.get('/room', controller.getRoom);

module.exports = router;