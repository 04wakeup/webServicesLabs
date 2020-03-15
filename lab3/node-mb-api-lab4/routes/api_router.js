
const passport = require('passport');
const express = require('express');
const router = express.Router(); // object that handles routing.

const msgAPIController = require('../controllers/msg-api');
const userAPIController = require('../controllers/user-api'); 

// passport.authenticate() will be called when an attempt is made to POST a new message. It
// uses the Basic strategy that you configured in user-api.js.
router.route('/messages')
 .get(msgAPIController.getAllMessages)
 .post(passport.authenticate('basic', { session: false }),msgAPIController.addNewMessage);

router.route('/users') 
 .post(userAPIController.registerNewUser)
 .get(passport.authenticate('basic', { session: false }), (req, res, error) => { 
     res.send('ok');
     console.log(error);
 });
//  .get(passport.authenticate('basic', { session: false }),msgAPIController.getUser);
 
router.route('/login') 
 .post(passport.authenticate('local', {session: false}), userAPIController.login);

module.exports = router;
 