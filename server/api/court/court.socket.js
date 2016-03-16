/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Court = require('./court.model');

exports.register = function(socket) {
  Court.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Court.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('court:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('court:remove', doc);
}