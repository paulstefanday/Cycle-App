export default /*@ngInject*/ function($auth, $state, SweetAlert) {

  this.newUser = {}

  this.login = () => {
    $auth.login(this.newUser).then(res => {
      SweetAlert.swal({ title: "Welcome", text: "Submit a report now!", timer: 2000, showConfirmButton: false });
      $state.go('map')
    }).catch(err => SweetAlert.swal({ title: "Login Failed", text: "Please try again", timer: 2000, showConfirmButton: false }))
  }

  this.signup = () => {
    $auth.signup(this.newUser).then(res => {
        this.login()
    }).catch(err => this.login())
  }

	this.authenticate = function(provider) {
    $auth.authenticate(provider).then(res => {
      SweetAlert.swal({ title: "Welcome", text: "Submit a report now!", timer: 2000, showConfirmButton: false });
      $state.go('map')
    });
  };

  this.isUser = () => $auth.isAuthenticated()

}
