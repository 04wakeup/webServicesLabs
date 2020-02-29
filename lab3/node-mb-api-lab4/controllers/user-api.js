const mongoose = require('mongoose');
const userModel = mongoose.model('user');

const registerNewUser = (req, res) => {
    //res.status(200).send('Successful API New User POST Request');
    userModel
    .findOne({
        '$or': [
            { email: req.body.email },
            { username: req.body.username }
        ]
    })
    .exec( (error, user) => {
        // bad email or username
        if (error){
            return res 
            .status(400)
            .send('Bad Request. The user in the body of the \
            Request is either missing or malformed.');
        } else if (user) {
            // user found, this is a duplicate email of username
            return res 
            .status(403)
            .send('Forbidden. Username or email \
            already exists.');
        } else {
            // got to this point, no errors or duplicates found
            userModel 
            .create(req.body, (error, user) => {  // create a new user
                if (error) {
                    res 
                    .status(400)
                    .send('Bad Request. The user in the body of the \
                    Request is eigher missing or malformed.');
                } else {
                    res.status(201).json(user);
                }
            })
        }

    }

    )
}

module.exports = {
    registerNewUser
};