const express = require('express');
const router = express.Router(); // object that handles routing.

const msgAPIController = require('../controllers/msg-api');

router.route('/messages')
 .get(msgAPIController.getAllMessages)
 .post(msgAPIController.addNewMessage);

module.exports = router;