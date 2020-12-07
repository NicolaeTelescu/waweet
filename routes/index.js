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



// Homepage
router.get('/', async function(req, res, next) {
  return res.render('index', { params: JSON.stringify({}).replace(/<\//g, "<\\/") });
});



// Show items page
router.get('/items', async function(req, res, next) {
  const data = {
    errors: req.session.errors,
    success: req.session.success
  };

  req.session.errors = null;
  req.session.success = null;

  return res.render('index', { params: JSON.stringify(data).replace(/<\//g, "<\\/") });
});



// Get all items
router.get('/items/all', async function(req, res, next) {
  
  let { search, category, page, limit } = req.query;

  if (!page) page = 1;
  if (!limit) limit = 5;
  if (!search) search = '';
  if (!category) category = '';
  
  page = parseInt(page);
  limit = parseInt(limit);
  
  try {
    const filter = {
      title: new RegExp(search, 'i'),
      category: new RegExp(category, 'i'),
      show: true
    };

    const items = await Item.find(filter).limit(limit).skip((page - 1) * limit);
    const count = await Item.countDocuments(filter);

    res.json({
      items,
      totalElements: count
    });
  } catch (err) {
    console.error(err.message);
  }
});




module.exports = router;
