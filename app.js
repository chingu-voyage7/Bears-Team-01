const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const passport = require('passport');


// Import routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const beersRouter = require('./routes/beers');
const authRouter = require('./routes/auth');
const reviewRouter = require('./routes/reviews');

const app = express();


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const dbUrl = require('./do_not_commit/database.config')

// Connecting to the database
mongoose
  .connect(dbUrl,{useNewUrlParser: true})
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });


app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

require('./services/passport');

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/beers', beersRouter);
app.use('/auth', authRouter);
app.use('/beers/:id/reviews', reviewRouter);


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


console.log("Listening on port 5000");

module.exports = app;


// express server is on port 5000
// react is on port 3000