export default /*@ngInject*/ function ($scope, $q, $http) {

	$scope.report = () => {

		$scope.getGeo()
			.then(res => $http.post('/api/v1/activity', pos))
			.then(res => alert('submitted'));

	}

	$scope.getGeo = () => {

		let q = $q.defer();

		navigator.geolocation.getCurrentPosition(pos => {
            this.pos = pos.coords;
            this.loaded();
            q.resolve(this.pos);
        }, error => {
            this.loaded();
            alert('Unable to get location: ' + error.message);
            q.reject(error);
        });

        return q.promise;
	}

}