'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  sport: { type: Schema.Types.ObjectId, ref: 'Sport' },
  court: { type: Schema.Types.ObjectId, ref: 'Court' },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  notes: String,
  date: Date,
  status: String
});

module.exports = mongoose.model('Game', GameSchema);