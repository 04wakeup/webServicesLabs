const yup = require('yup');

const messageSchema = yup.object({
    name: yup
    .string()
    .trim()
    .min(2, 'Your name must be at least 2 characters!')
    .max(10, 'Your name cannot be more than 10 characters.')
    .matches(/[A-za-z]{2,}/, 'Invalid name. Use Upper or Lowercase letters only.')
    .required('Your name is required.'),
    msg: yup
    .string() 
    .trim()
    .min(3, 'Your message must be at least 3 characters!')
    .max(20, 'Your message must be no more than 20 characters.')
    .required('A message is required.')
    });

module.exports = messageSchema;
