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


app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard penguin',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 60000 
  }
}));
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
  res.redirect(404, '/');
});