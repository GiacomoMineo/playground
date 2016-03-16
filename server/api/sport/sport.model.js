'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SportSchema = new Schema({
  name: String,
  icon: String,
  favorite_count: Number
});

module.exports = mongoose.model('Sport', SportSchema);