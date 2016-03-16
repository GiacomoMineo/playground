'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourtSchema = new Schema({
  name: String,
  image: String,
  sport: String,
  descriptions: String,
  cost: String,
  indoor: Boolean
});

module.exports = mongoose.model('Court', CourtSchema);