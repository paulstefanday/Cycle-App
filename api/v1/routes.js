// Controllers
var authCtrl = require('./controllers/Auth.js');
var activityCtrl = require('./controllers/Activity.js');
var user = require(__base+'/api/config/permissions');
var router = require('koa-router');

var api = new router();

// My records
api.get('/activity/me', activityCtrl.getMe);
api.put('/activity/me/:id', activityCtrl.updateMe);
api.delete('/activity/me/:id', activityCtrl.deleteMe);

// Create new record
api.post('/activity', user.is('logged in'), activityCtrl.create);

// Get records based on latitude/longitude
api.post('/activity/geo/:distance', activityCtrl.local);

// Auth Routes
api.post('/facebook', authCtrl.facebook);
api.post('/signup', authCtrl.signup);
api.post('/login', authCtrl.login);
api.post('/reset', authCtrl.reset);

module.exports = api.middleware();
