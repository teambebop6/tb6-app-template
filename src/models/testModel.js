var TestModel, mongoose, autoIncrement;

mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

TestModel = new mongoose.Schema({
  _id: Number,
  title: String,
  detail: String,
  avatar: Object,
  order: {
    type: Number,
    default: -1
  },
  visible: {
    type: Boolean,
    default: false
  },
  creation_date: {
    type: Date,
    default: Date.now
  },
  last_modified_date: {
    type: Date,
    default: Date.now
  }
});

TestModel.plugin(autoIncrement.plugin, 'TestModel');

module.exports = mongoose.model('TestModel', TestModel);
