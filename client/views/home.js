export default /*@ngInject*/ function($auth, $state, SweetAlert) {

	this.authenticate = function(provider) {
    $auth.authenticate(provider).then(res => {
      SweetAlert.swal("Welcome", "Submit a report now!", "success")
      $state.go('map')
    });
  };

  this.isUser = () => $auth.isAuthenticated()

}
