/***
 * Basic CRUD for site admin
 * **/

import express from 'express';

const router = express.Router();

const Model = require('../../models/testModel');

// List
router.get('/', (req, res, next) => {
  Model.find((err, items) => {
    if(err){ return res.json(err); }
    res.json(items);
  });
});

// Create
router.post('/add', (req, res) => {
  var item = new Model(req.body.item);

  item.save((err) => {
    if(err){ res.json(err); }

    // OK
    res.json({status: 200});
  })
});

// Read
router.get('/:id', (req, res) => {
  Model.findOne({_id: req.params.id}, (err, item) => {
    if(err){ return res.json(err); }

    res.json(item);
  });
});

// Update
router.post('/:id', (req, res) => {
  Model.findOne({_id: req.params.id}, (err, item) => {
    if(err){ return res.json(err); }

    // TODO: assign all properties except creation date and _id
    var id = item._id;
    item = req.body.item;
    item._id = id;

    item.save((err) => {
      if(err){ res.json(err); }

      // OK
      res.json({status: 200});
    })
  });
});

// Delete
router.post('/delete', (req, res) => {
  Model.findOne({_id: req.body.id}).remove().exec((err) => {
    if(err){ return res.json(err); }
    
    // OK
    res.json({status: 200});
  });
});

module.exports = router;
