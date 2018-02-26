const express = require('express');


const app = express();
const PORT = process.env.PORT || 5000;

//load in passport setup
require('./services/passport');

//load auth routes and pass app to them
require('./routes/authRoutes')(app);

//start server
app.listen(PORT);