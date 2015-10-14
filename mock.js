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
      type: chance.pick([ 'Crash', 'Close Call', 'Verbal Abuse', 'Horn Abuse']),
      latitude: chance.latitude({min: -33.938981, max: -33.874584}),
      longitude: chance.longitude({min: 151.045876, max: 151.267319}),
    }
  }
}
