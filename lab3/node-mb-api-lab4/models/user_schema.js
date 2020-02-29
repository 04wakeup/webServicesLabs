 
const argon2 = require('argon2');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
    type: String,
    trim: true,
    match: /[A-Za-z]{2,}/,
    minlength: 2,
    maxlength: 10, 
    required: true
    },
    email: {
    type: String,
    trim: true,  
    required: true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        trim: true, 
        minlength: 8,
        maxlength: 64,
        required: true,
        lowercase: true
        },
    }); 

userSchema.pre('save', async function(){
    // hash and salt password
    try{
        const hash = await argon2.hash(this.password, {
            type: argon2.argon2id
        });
        this.password = hash;
    } catch (err){
        console.log('Error in hashing password' + err);
    }
 });

userSchema.methods.verifyPassword = 
 async function(plainTextPassword){
     const dbHashedPassword = this.password;
     try{
         return await argon2.verify(dbHashedPassword, plainTextPassword);
     } catch(err){
        console.log('Error verifying password' + err);
     }
 }

module.exports = mongoose.model('user', userSchema);
