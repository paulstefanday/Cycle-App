var Roles = require('koa-roles'),
	config = require(__base+'/config/config.js'),
	thinky = require(__base+'/config/thinky.js'),
	type = thinky.type,
	r = thinky.r,
	formidable = require('koa-formidable'),
	validator = require('validator'),
	_ = require('lodash'),
	M = require('../models');


// Error handling
var user = new Roles({
	failureHandler: function *(action) {
		this.status = 403;
		this.body = {
		  message: 'Access Denied - You are not ' + action + '.'
		};
	}
});


// Roles

// Admin users can access all pages
user.use(function (action) {
  // if (this.user.role === 'admin') {
  //   return true;
  // }
});

user.use('logged in', function (action) {
	if (this.user) return true;
})


module.exports = user;


