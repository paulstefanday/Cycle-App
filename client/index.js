require('socket.io');
var angular = require('angular'),
    name = 'app';

require('angular-socket-io');
require('angular-ui-router');

angular.module(name, [
  'btford.socket-io', 
  'ui.router'
]);

require('./boostrap')(name)
  .factory('socket', /*@ngInject*/ function (socketFactory) {
    return socketFactory({
      prefix: '',
      ioSocket: io.connect('http://localhost:3000')
    });
  })
  .directive(...require('./directives/map'))
  .config(require('./config'));







