const express = require('express');
const fs = require('fs');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Item = require('../Database/models/Item');
const Category = require('../Database/models/Category');
const helpers = require('../src/helpers/index');
const itemValidation = require('../src/validators/item');



// All items
router.get('/', function(req, res, next) {
  const validations = {
    errors: req.session.errors,
    success: req.session.success
  };

  req.session.errors = null;
  req.session.success = null;

  res.render('index', { params: JSON.stringify(validations).replace(/<\//g, "<\\/") });
});



// Get all items
router.get('/items', async function(req, res, next) {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
  }
});



// Get an item
router.get('/item/show/:itemSlug', async function(req, res, next) {
  try {
    const item = await Item.find({slug: req.params.itemSlug});
    res.render('index', { params: JSON.stringify(item).replace(/<\//g, "<\\/") });
  } catch (error) {
    res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
  }
});



// Page for adding an item
router.get('/item/add', async function(req, res, next) {
  try {
    const categories = await Category.find();

    const params = {
      categories: categories,
      form: req.session.form,
      errors: req.session.errors
    }

    req.session.destroy();

    res.render('index', { params: JSON.stringify(params).replace(/<\//g, "<\\/") });
  } catch (err) {
    res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
  }
});



// Add a new item
router.post('/item',
  itemValidation,
  async function(req, res, next) {

    const form = {
      title: req.body.title,
      category: req.body.category,
      rating: req.body.rating
    };

    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.session.form = form;
      req.session.errors = errors.array();

      return res.redirect('/item/add');
    }


    // Adding the item to the database
    try {
      const count = await Item.countDocuments({});

      // Uploading image
      if (req.files === null) {
        return res.status(400).json({errors: [{msg: 'Image is required'}]});
      }

      const image = req.files.image;
      const imageName = './public/images/eating/' + (count + 1) + '.jpg';
      const imageNameSmall = './public/images/eating-small/' + (count + 1) + '-small.jpg';

      image.mv(imageName, function(err) {
        if (err)
          return res.status(500).send(err);

        // Convert the image to a small dimension for homepage
        helpers.jimp([{src: imageName, dest: imageNameSmall}], 200, 90);
      });
      

      // Insert item to the database
      const item = new Item({
        ID: count + 1,
        title: req.body.title,
        category: req.body.category,
        rating: req.body.rating,
        slug: helpers.convertToSlug(req.body.title)
      });

      const savedItem = await item.save();
      

      req.session.success = 'Item has added with success';
      req.session.errors = false;
      res.redirect('/');
    } catch (err) {
      res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
    }
});



// Page for update a new item
router.get('/item/edit/:itemSlug', async function(req, res, next) {
  try {
    const categories = await Category.find();
    const item = await Item.find({slug: req.params.itemSlug});

    const params = {
      categories: categories,
      form: req.session.form ? req.session.form : item,
      errors: req.session.errors
    }

    req.session.destroy();

    res.render('index', { params: JSON.stringify(params).replace(/<\//g, "<\\/") });
  } catch (err) {
    res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
  }
});



// Update a new item
router.patch('/item', async function(req, res, next) {
  try {
    
  } catch (err) {
    res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
  }
});



// Delete an item
router.delete('/item', async function(req, res, next) {
  try {
    
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
