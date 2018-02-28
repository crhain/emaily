const mongoose = require('mongoose');
//use object destructuring to assign Schema object to Schema variable
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);