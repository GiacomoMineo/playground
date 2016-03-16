'use strict';

var _ = require('lodash');
var Sport = require('./sport.model');

// Get list of sports
exports.index = function(req, res) {
  Sport.find(function (err, sports) {
    if(err) { return handleError(res, err); }
    return res.json(200, sports);
  });
};

// Get a single sport
exports.show = function(req, res) {
  Sport.findById(req.params.id, function (err, sport) {
    if(err) { return handleError(res, err); }
    if(!sport) { return res.send(404); }
    return res.json(sport);
  });
};

// Creates a new sport in the DB.
exports.create = function(req, res) {
  Sport.create(req.body, function(err, sport) {
    if(err) { return handleError(res, err); }
    return res.json(201, sport);
  });
};

// Increase favorite counter
exports.increaseCounter = function(req, res) {
  var sportId = req.params.id;

  Sport.findById(sportId, function (err, sport) {
    sport.favorite_count++;
    sport.save(function(err) {
      if (err) return handleError(res, err);
      res.send(200);
    });
  });
}

// Decrease favorite counter
exports.decreaseCounter = function(req, res) {
  var sportId = req.params.id;

  Sport.findById(sportId, function (err, sport) {
    sport.favorite_count--;
    sport.save(function(err) {
      if (err) return handleError(res, err);
      res.send(200);
    });
  });
}

// Updates an existing sport in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Sport.findById(req.params.id, function (err, sport) {
    if (err) { return handleError(res, err); }
    if(!sport) { return res.send(404); }
    var updated = _.merge(sport, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, sport);
    });
  });
};

// Deletes a sport from the DB.
exports.destroy = function(req, res) {
  Sport.findById(req.params.id, function (err, sport) {
    if(err) { return handleError(res, err); }
    if(!sport) { return res.send(404); }
    sport.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}