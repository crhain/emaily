const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;

//connect to mongoDB 
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


//load models in
require('./models/User');

//load in passport setup
require('./services/passport');

//load auth routes and pass app to them
require('./routes/authRoutes')(app);

//start server
app.listen(PORT, () => {
    console.log("connecting to server on port: " + PORT);
});