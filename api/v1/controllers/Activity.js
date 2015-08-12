var   formidable = require('koa-formidable'),
	  config = require('../../../config/config'),
	  M = require('../../../models/'),
	  thinky = require(__base+'/config/thinky.js'),
	  r = thinky.r;

/**
 * @api {get} /api/v1/activity Get
 * @apiName Get
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Array} action Array of action objects
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *          id: 'asdasdasdasdasdsadad'
 *     }]
 *
 */ 

 module.exports.find = function *() {
 	this.body = yield M.Activity.run();
 	this.status = 200;
 }

/**
 * @api {get} /api/v1/search Get
 * @apiName Get
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Array} action Array of action objects
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 */ 

module.exports.search = function *() {
// this.body = yield M.Activity.run();
// this.status = 200;
}

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

 	var body = yield formidable.parse(this), record, result;

 	body.fields.ip = this.req.headers['x-forwarded-for'] || this.req.connection.remoteAddress;

 	record = new M.Activity(body.fields);
 	result = yield record.save();

 	this.body = result;
 	this.status = 200;

 }


// module.exports.update = function *() {
//   var body = yield formidable.parse(this), record, result;

//   result = yield M.Activity.get(this.params.profile).update(body.fields);

//   this.body = result;
//   this.status = 200;
// }