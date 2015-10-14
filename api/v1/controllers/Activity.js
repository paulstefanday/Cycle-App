var   config = require(__base+'/api/config/config'),
	  M = require(__base+'/api/models/'),
	  thinky = require(__base+'/api/config/thinky.js'),
	  r = thinky.r;

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

module.exports.getMe = function *() {
  this.body = yield M.Activity.filter({ userId: this.user.id })
}

module.exports.updateMe = function *() {
  var record = yield M.Activity.get(this.params.id)

  if(record.userId !== this.user.id) this.throw(403, "You do not have access to this record")

  this.body = yield M.Activity.get(this.params.id).update(this.request.body)
}

module.exports.deleteMe = function *() {
  var record = yield M.Activity.filter({ userId: this.user.id, id: this.params.id }).delete()

  if(record.deleted !== 1) this.throw(403, "Failed to delete record")

  this.body = { success: true, id: this.params.id };
}
