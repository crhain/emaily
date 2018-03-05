const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;

//connect to mongoDB 
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

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

//load billing routes and pass app to them
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    // Express will serve up production assets
    // like our main.js file or main.css file!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//start server
app.listen(PORT, () => {
    console.log("connecting to server on port: " + PORT);
});