class Nav {

  constructor() {
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.template = require('./nav.jade');
    this.scope = {};
    this.controller = /*@ngInject*/ function($auth, $state){

      this.showNav = false;

      this.hide = () => this.showNav = false

      this.login = () => {
        this.hide();
        $auth.authenticate('facebook').then(res => $state.go('map'));
      }

      this.logout = () => {
        this.hide();
        $auth.logout().then(res => $state.go('home'));
      }

      this.loggedIn = () => $auth.isAuthenticated()

    }
  }
}

export default [ 'nav', Nav ]
