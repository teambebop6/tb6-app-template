/***
 *
 *   Generic CRUD template for item management
 * 
 * **/


import express from 'express';

var multer = require('multer');
var path = require('path');
var mkdirp = require('mkdirp');
var crypto = require('crypto');
var mime = require('mime');

const router = express.Router();

// Load relevant model
const Model = require('../../models/testModel');

// Configure multipart handler & upload destination
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var p = path.join(req.app.locals.config.UPLOAD_FOLDER, '/example/');
    mkdirp.sync(p);
    cb(null, p)
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.getExtension(file.mimetype));
    });
  }
});
var upload = multer({storage: storage});


// List
router.get('/', (req, res, next) => {
  Model.find((err, items) => {
    if(err){ return res.json(err); }
    res.json(items);
  });
});


// Create
router.post('/add', upload.fields(
[
  { name: 'avatar', maxCount: 1 },
]
), (req, res, next) => {
  console.log(req.body);
  var item = new Model(req.body);
  console.log("Adding new item:");
  console.log(item);

  // Files
  item.avatar = req.files.avatar;
  // ...

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
