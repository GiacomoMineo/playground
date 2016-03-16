/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Sport = require('./sport.model');

exports.register = function(socket) {
  Sport.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Sport.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sport:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sport:remove', doc);
}