export default /*@ngInject*/ function($auth, $state, SweetAlert) {

	this.authenticate = function(provider) {
    $auth.authenticate(provider).then(res => {
      SweetAlert.swal({ title: "Welcome", text: "Submit a report now!", timer: 2000, showConfirmButton: false });
      $state.go('map')
    });
  };

  this.isUser = () => $auth.isAuthenticated()

}
