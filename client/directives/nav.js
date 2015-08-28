class Nav {

  constructor() {
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.template = require('./nav.jade');
    this.scope = {};
    this.controller = /*@ngInject*/ function($scope, $rootScope){

      $rootScope.showNav = false;

    }

}

export default [ 'nav', Nav ]
