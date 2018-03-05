const mongoose = require('mongoose');
//use object destructuring to assign Schema object to Schema variable
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);