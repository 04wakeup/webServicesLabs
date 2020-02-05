const messageSchema = require('../models/message_schema.js');

const mongoose = require('mongoose');
const messageModel = mongoose.model('message');

// messages = [
//     {name: 'Bill', msg: 'Hi All!'}, 
//     {name: 'Ann', msg: 'ICS 221 is fun'}
//   ]

// Get Request  Hanndler
const getAllMessages = (req, res) => {
    // res.status(200).send('Successful API GET Request');
    // res.status(200).json(messages);

    /* lab3(ok) -> lab4(new method using DB)
    if (typeof messages == 'object' && Array.isArray(messages)){
        res.status(200).json(messages);
    } else {
         res.status(400).send('Bad Request');
    }
    */ 
   messageModel
    .find()
    .sort( {'_id': -1} )
    .exec( (error, messages) => {
        if (error) {
            res.status(400).send('Bad Request');
        } else {
            res.status(200).json(messages);
        }
    });
       
};

// Post Request Handler
const addNewMessage = async (req, res) => {  
    // console.log(messageSchema.validate(req.body)); 

    /* lab3(ok) -> lab4(changed for using DB)
    try {  
        let message = await messageSchema.validate(req.body);   /// (1) 여기선 모든 데이터를 반환함
        messages.unshift(message);

        // TODO: add message as first element of array and
        // respond with 201 Created and the message in the body
        // of the response.
        res
         .status(201)
         .send(messages);   

    } catch(error) {
        res
        .status(400)
        .send('Bad Request. The message in the body of the \
         Request is either missing or malformed.');
        }
    */
    //  (1) 여기선 넣은 데이터 한건 성공한것만 답변함, 리턴값 수/타입이 완전 틀림
   messageModel
        .create( req.body, (error, message) => {
                if (error) {
                    res
                    .status(400)
                    .send('Bad Request. The message in the body of the \
                    Request is either missing or malformed.');
                } else {
                    res.status(201).json(message);
                }
                });
};

module.exports = {
    getAllMessages,
    addNewMessage
}