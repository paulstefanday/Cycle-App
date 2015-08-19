const io = require('socket.io-client'),
      angular = require('angular'),
      name = 'app';

require('angular-socket-io');
require('angular-ui-router');


// App
angular.module(name, [
  'btford.socket-io', 
  'ui.router'
]).config(require('./config'));


// App Parts
require('./bootstrap')(name)
  .directive(...require('./directives/map'))

  .factory('socket', /*@ngInject*/ function (socketFactory) {
    return socketFactory({
      prefix: '',
      ioSocket: io.connect('http://localhost:3000')
    });
  })
  








