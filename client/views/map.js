export default /*@ngInject*/ function ($scope, socket, $q) {

	this.feed = [];

	socket.emit('activity:changes:start', {});

	socket.on('activity:changes', change => {
    console.log(change)
		if(change.new_val) this.feed.push(change.new_val);
	});

	this.start = () => {
		let query = {}; // filter: {}
		socket.emit('activity:changes:start', query);
	}

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
    navigator.geolocation.getCurrentPosition(pos => { q.resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }); }, error => { q.reject(error); });
    return q.promise;
  }

  this.getGeo().then(res => {
    this.center = res;
    console.log(res);
  });

}
