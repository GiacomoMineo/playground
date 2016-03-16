/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Court = require('../api/court/court.model');
var Sport = require('../api/sport/sport.model');
var Game = require('../api/game/game.model');
var User = require('../api/user/user.model');

Game.find({}).remove();

/*Court.find({}).remove(function() {
  Court.create({
    name : 'Villarco',
    image : '/assets/images/courts/villarco.jpg',
    sport: '541812d0d7d91a140dcc3fce',
    description: 'Concrete field with 2 baskets',
    cost: 'free',
    indoor: false
  },{
    name : 'Terrazze',
    image : '/assets/images/courts/terrazze.jpg',
    sport: '541812d0d7d91a140dcc3fce',
    description: 'Smooth concrete field with 2 baskets',
    cost: 'free',
    indoor: false
  },{
    name : 'KickOff',
    image : '/assets/images/courts/kickoff_football.jpg',
    sport: '541812d0d7d91a140dcc3fcd',
    description: '4 syntethic football fields',
    cost: 'paid',
    indoor: false
  },{
    name : 'Palestra Comunale Cervia',
    image : '/assets/images/courts/palestra_cervia.jpg',
    sport: '541812d0d7d91a140dcc3fce',
    description: 'Parquet floors',
    cost: 'free',
    indoor: false
  },{
    name : 'Ponte Abbadesse Basketball',
    image : '/assets/images/courts/ponte_abbadesse.jpg',
    sport: '541812d0d7d91a140dcc3fce',
    description: 'Concrete floor, one basket',
    cost: 'free',
    indoor: false
  });
});*/

/*Sport.find({}).remove(function() {
  Sport.create({
    name : 'Football',
    icon : 'football.png',
    favorite_count: 0
  },{
    name : 'Basketball',
    icon : 'basketball.png',
    favorite_count: 0
  },{
    name : 'Golf',
    icon : 'golf.png',
    favorite_count: 0
  },{
    name : 'Hockey',
    icon : 'hockey.png',
    favorite_count: 0
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});*/

