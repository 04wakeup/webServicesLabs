

// const yup = require('yup');

// const messageSchema = yup.object({
//     name: yup
//     .string()
//     .trim()
//     .min(2, 'Your name must be at least 2 characters!')
//     .max(10, 'Your name cannot be more than 10 characters.')
//     .matches(/[A-za-z]{2,}/, 'Invalid name. Use Upper or Lowercase letters only.')
//     .required('Your name is required.'),
//     msg: yup
//     .string() 
//     .trim()
//     .min(3, 'Your message must be at least 3 characters!')
//     .max(20, 'Your message must be no more than 20 characters.')
//     .required('A message is required.')
//     });
const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    name: {
    type: String,
    trim: true,
    match: /[A-Za-z]{2,}/,
    minlength: 2,
    maxlength: 10, 
    required: true
    },
    msg: {
    type: String,
    trim: true, 
    minlength: 3,
    maxlength: 20,
    required: true
    }
    });

// module.exports = messageSchema;
// The first argument is the name of the model and the second is the Schema to compile.
module.exports = mongoose.model('message', messageSchema);
