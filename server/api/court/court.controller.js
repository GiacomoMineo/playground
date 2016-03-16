'use strict';

var _ = require('lodash');
var Court = require('./court.model');

// Get list of courts
exports.index = function(req, res) {
  Court.find(function (err, courts) {
    if(err) { return handleError(res, err); }
    return res.json(200, courts);
  });
};

// Get a single court
exports.show = function(req, res) {
  Court.findById(req.params.id, function (err, court) {
    if(err) { return handleError(res, err); }
    if(!court) { return res.send(404); }
    return res.json(court);
  });
};

// Creates a new court in the DB.
exports.create = function(req, res) {
  Court.create(req.body, function(err, court) {
    if(err) { return handleError(res, err); }
    return res.json(201, court);
  });
};

// Updates an existing court in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Court.findById(req.params.id, function (err, court) {
    if (err) { return handleError(res, err); }
    if(!court) { return res.send(404); }
    var updated = _.merge(court, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, court);
    });
  });
};

// Deletes a court from the DB.
exports.destroy = function(req, res) {
  Court.findById(req.params.id, function (err, court) {
    if(err) { return handleError(res, err); }
    if(!court) { return res.send(404); }
    court.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}