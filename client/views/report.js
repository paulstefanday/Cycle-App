export default /*@ngInject*/ function ($scope, $auth) {

	$scope.logout = () => {
		$auth.logout();
	}

}