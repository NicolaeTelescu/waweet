var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var mongoose = require('mongoose');
var fileUpload = require('express-fileupload');
var cors = require('cors');
require('dotenv/config');


var indexRouter = require('./routes/index');

var port = 3000;
var app = express();
app.listen(port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
// app.use(logger('dev')); -> For logs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
  res.redirect(301, '/product');
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