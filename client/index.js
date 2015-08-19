require('socket.io');
var angular = require('angular');
require('angular-socket-io');
require('angular-ui-router');

angular.module('app', [
  'btford.socket-io', 
  'ui.router'
])

.factory('socket', /*@ngInject*/ function (socketFactory) {
  return socketFactory({
    prefix: '',
    ioSocket: io.connect('http://localhost:3000')
  });
})

.directive(...require('./directives/map'))

.config(require('./config'));
