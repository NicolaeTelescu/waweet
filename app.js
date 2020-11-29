const cors = require('cors');
const path = require('path');
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const favicon = require('serve-favicon');
require('dotenv/config');


const indexRouter = require('./routes/index');


const port = 3000;
const app = express();
app.listen(port);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard penguin',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 60000 
  }
}
));
app.use(fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
  useTempFiles : true,
  tempFileDir : '/src/tmp/'
}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);


// Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
	() => { console.log("Connected to DB"); }
);


// Every wrong route redirect to homepage (for now)
app.use(function(req, res, next) {
  res.redirect(404, '/product');
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});