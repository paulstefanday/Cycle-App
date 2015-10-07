var config = require(__base+'/api/config/config'),
	Chance = require('chance'),
    chance = new Chance(),
    _ = require('lodash');


module.exports = {
  data: { v: '/api/v1' },
	activities: [],
	users: [],
  user: function() {
  	return {
  		first_name: chance.first(),
      last_name: chance.last(),
      email: chance.email(),
      password: chance.string({length: 8})
  	};
  },
  activity: function() {
  	return {
      ip: chance.ip(),
      latitude: chance.latitude(),
      longitude: chance.latitude(),
    }
  }
}
