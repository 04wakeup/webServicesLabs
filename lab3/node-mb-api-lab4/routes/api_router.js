const passport = require('passport');
const express = require('express');
const router = express.Router(); // object that handles routing.

const msgAPIController = require('../controllers/msg-api');
const userAPIController = require('../controllers/user-api');

router.route('/messages')
 .get(msgAPIController.getAllMessages)
 .post(passport.authenticate('basic', { session: false }),msgAPIController.addNewMessage);

router.route('/users') 
 .post(userAPIController.registerNewUser);

module.exports = router;
 