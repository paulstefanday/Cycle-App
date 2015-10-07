var app = require('./server'),
	request = require('co-supertest').agent(app.listen()),
	co = require('co'),
	H = require(__base+'/api/config/helpers'),
	M = require(__base+'/api/models'),
	_ = require('lodash'),
	config = require(__base+'/api/config/config'),
	thinky = require(__base+'/api/config/thinky.js'),
	r = thinky.r,
	fake = require('./mock.js'),
	jwt = require('jsonwebtoken'),
  Chance = require('chance'),
  chance = new Chance(),
	amount = process.env.a ? process.env.a : 1000;

co(function *(){

	// cleaned database
	var tables = yield r.db('test').tableList().forEach(function(name){
		return r.table(name).delete()
	})

	console.log('All tables cleared')

  for (var i = 1; i < 6; i++) {
    var user = fake.user();
    var join = yield request.post(fake.data.v + '/signup/').send(user).end();
    user = yield M.User.filter({email: user.email})
    user[0].token = join.body.token;
    fake.users.push(user[0]);
  }

  console.log('Created 5 users')

	//
	for (var i = 1; i < amount; i++) {
    var record = fake.activity();
    var count = chance.integer({min: 0, max: 4});
		var profile = yield request.post(fake.data.v + '/activity').set('Authorization', fake.users[count].token).send(record).end();
		fake.activities.push(profile.body);
	}

	console.log('Created ' + fake.activities.length + ' actions.')

  process.exit()

}).catch(function(err){
	console.log(err);
	process.exit()
});


function rand(limit) {
	return Math.abs(Math.floor(Math.random() * limit));
}
