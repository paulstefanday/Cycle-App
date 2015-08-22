const io = require('socket.io-client'),
      angular = require('angular'),
      name = 'app';

require('angular-socket-io');
require('angular-ui-router');
require('satellizer');

// App
angular.module(name, [
	'satellizer',
	'btford.socket-io', 
	'ui.router'
]).config(require('./config'));


// App Parts
require('./bootstrap')(name)
	.directive(...require('./directives/map'))
	.factory('socket', /*@ngInject*/ (socketFactory) => socketFactory({ prefix: '', ioSocket: io.connect('http://localhost:3000')}))









