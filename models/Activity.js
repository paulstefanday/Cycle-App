var config 		= require(__base+'/config/config.js'),
    thinky 		= require(__base+'/config/thinky.js'),
	type 		= thinky.type,
	r 			= thinky.r,
	validator 	= require('validator');

var activities = thinky.createModel("activities", {
    id: type.string(),
    client: type.string(),
    campaign: type.string(),
    action: type.string(),
    value: type.string(),
    ip: type.string(),
    lat: type.number(),
    lng: type.number(),
    createdAt: type.date().default(r.now())
});

activities.ensureIndex("createdAt");

module.exports = activities;