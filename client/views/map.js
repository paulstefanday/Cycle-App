export default /*@ngInject*/ function ($scope, socket, $q, $http, SweetAlert) {

	this.feed = []
  // this.center = { longitude: 0, latitude: 0 }

	socket.emit('activity:changes:start', {});

	socket.on('activity:changes', change => {
		if(change.new_val) this.feed.push(change.new_val);
	});

	this.start = (query={}) => socket.emit('activity:changes:start', query)

	this.stop = () => {
		this.feed = []; // clear map
		socket.emit('activity:changes:stop'); // disconnect
	}

	this.change = () => {
		$scope.stop();
		$scope.start();
	}

  this.getGeo = () => {
    let q = $q.defer();
    navigator.geolocation.getCurrentPosition(pos => {
      q.resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
    }, error => {
      q.reject(error);
    });
    return q.promise;
  }

  this.getGeo().then(res => this.center = res);


  // Report

  this.report = () => {
    this.laddaLoading = true;
    this.getGeo()
      .then(res => $http.post('/api/v1/activity', { latitude: res.latitude, longitude: res.longitude }))
      .then(res => {
        SweetAlert.swal("It worked!", "Report sent successfully!", "success")
        this.laddaLoading = false;
      })
      .catch(error => {
        SweetAlert.swal("It failed!", "Please try again", "error")
        this.laddaLoading = false;
      })
  }

  this.getGeo = () => {
    let q = $q.defer();
    navigator.geolocation.getCurrentPosition(pos => { q.resolve(pos.coords); }, error => { q.reject(error); });
    return q.promise;
  }

}
