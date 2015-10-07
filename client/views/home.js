export default /*@ngInject*/ function($auth, $state) {

	this.authenticate = function(provider) {
    $auth.authenticate(provider).then(res => $state.go('map'));
  };

  this.isUser = () => $auth.isAuthenticated()

}
