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
router.get('/', async function(req, res, next) {
  const data = {
    errors: req.session.errors,
    success: req.session.success
  };

  let search = req.query.search;
  let category = req.query.category;

  if (search) {
    data.search = `You searched for \'${search}\':`;
  }

  // Get items from database
  try {
    data.items = await Item.find({title: new RegExp(search, 'i'), category: new RegExp(category, 'i'), show: true});
  } catch (err) {
    return res.json(err);
  }

  req.session.errors = null;
  req.session.success = null;

  res.render('index', { params: JSON.stringify(data).replace(/<\//g, "<\\/") });
});



// Example for sending data to React
router.get('/product', function(req, res, next) {
  const data = { title: 'I am very hungry' };
  res.render('index', { params: JSON.stringify(data).replace(/<\//g, "<\\/")}); // against injection
});



module.exports = router;
