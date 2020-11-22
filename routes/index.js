const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Item = require('../Database/models/Item');
const Category = require('../Database/models/Category');
const helpers = require('../src/helpers/index');


const addRouter = require('./item/add');
const showRouter = require('./item/show');
const editRouter = require('./item/edit');
const deleteRouter = require('./item/delete');


router.use('/', addRouter);
router.use('/', showRouter);
router.use('/', editRouter);
router.use('/', deleteRouter);



// Homepage - All items
router.get('/', function(req, res, next) {
  const messages = {
    errors: req.session.errors,
    success: req.session.success
  };

  req.session.errors = null;
  req.session.success = null;

  res.render('index', { params: JSON.stringify(messages).replace(/<\//g, "<\\/") });
});



// Get all items
router.get('/items', async function(req, res, next) {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
  }
});



// Example for sending data to React
router.get('/product', function(req, res, next) {
  const data = { title: 'I am very hungry' };
  res.render('index', { params: JSON.stringify(data).replace(/<\//g, "<\\/")}); // against injection
});

module.exports = router;
