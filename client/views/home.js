export default /*@ngInject*/ function ($scope, $auth) {

	$scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

}