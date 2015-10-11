var config 		= require(__base+'/api/config/config.js'),
    thinky 		= require(__base+'/api/config/thinky.js'),
  	type 		  = thinky.type,
  	r 			  = thinky.r,
  	validator = require('validator');

var activities = thinky.createModel("activities", {
  id: type.string(),
  userId: type.string(),
  ip: type.string(),
  type: type.string(),
  createdAt: type.date().default(r.now()),
});

activities.pre('save', function(next) {
  if(this.longitude && this.latitude)
    this.location = r.point(this.longitude, this.latitude)
  next()
});

activities.ensureIndex('location', {geo: true})
activities.ensureIndex("createdAt");

module.exports = activities;
