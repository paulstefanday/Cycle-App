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
 *     {}
 *
 */

module.exports.create = function *() {
 	var body = this.request.body, record, result;

 	body.ip = this.req.headers['x-forwarded-for'] || this.req.connection.remoteAddress;
 	body.userId = this.user.id;
 	record = new M.Activity(body);

 	this.body = yield record.save();
 	this.status = 200;
}

module.exports.local = function *() {
  var body = this.request.body;

  this.body = yield r.db(config.db.db).table("activities").getNearest(
    r.point(body.longitude, body.latitude),
    { index: 'location', maxDist: parseInt(this.params.distance) }
  ).run()
}

module.exports.findAll = function *() {
  // var userFilter = this.user ? {id: this.user.id } : {};
  // var data =   // { _apply: sequence => sequence.get }
  this.body = yield M.Activity.filter({}).getJoin({ user: true }).limit(200);
}
