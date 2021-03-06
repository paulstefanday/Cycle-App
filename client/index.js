var io = require('socket.io-client'),
    angular = require('angular'),
    name = 'app';

// require('spin.js');
// var Ladda = require('ladda');
require('angular-socket-io');
require('angular-ui-router');
require('satellizer');
require('sweetalert');
require('angular-sweetalert');
require('ladda-angular');
require('ngmap');

// App
angular.module(name, [
	'satellizer',
	'btford.socket-io',
	'ui.router',
	'oitozero.ngSweetAlert',
  'ladda',
  'ngMap'
])
  .config(require('./config'))

// App Parts
require('./bootstrap')(name)
  .directive(...require('./directives/nav'))







