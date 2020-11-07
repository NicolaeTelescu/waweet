var express = require('express');
var router = express.Router();
var Item = require('../Database/models/Item');

// All items
router.get('/', function(req, res, next) {
  res.render('index', { params: "null"});
});

// Get all items
router.get('/items', async function(req, res, next) {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.json({ message: error });
  }
});

// Get an item
router.get('/:itemID', async function(req, res, next) {
  try {
    
  } catch (error) {
    res.json({ message: error });
  }
});

// Add a new item
router.post('/item', async function(req, res, next) {
  try {
    const count = await Item.countDocuments({});

    const item = new Item({
      ID: count + 1,
      title: req.body.title,
      category: req.body.category,
      rating: req.body.rating
    });

    const savedItem = await item.save();
    res.json(savedItem);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update a new item
router.patch('/item', async function(req, res, next) {
  try {
    
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete an item
router.delete('/item', async function(req, res, next) {
  try {
    
  } catch (error) {
    res.json({ message: error });
  }
});


// Example for sending data to React
router.get('/product', function(req, res, next) {
  const data = { title: 'I am very hungry' };
  res.render('index', { params: JSON.stringify(data).replace(/<\//g, "<\\/")}); // against injection
});

module.exports = router;
