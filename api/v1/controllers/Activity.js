var   config = require(__base+'/api/config/config'),
	  M = require(__base+'/api/models/'),
	  thinky = require(__base+'/api/config/thinky.js'),
	  r = thinky.r;


/**
 * @api {get} /api/v1/activity Create
 * @apiName Create
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id ID of user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { id: 'asdadasdsdadasdad' }
 *
 */ 

 module.exports.create = function *() {

 	var body = this.request.body, record, result;

 	console.log(body);

 	body.fields.ip = this.req.headers['x-forwarded-for'] || this.req.connection.remoteAddress;

 	record = new M.Activity(body.fields);
 	result = yield record.save();

 	this.body = result;
 	this.status = 200;

 }
