export default /*@ngInject*/ function ($scope, socket, $q) {

	this.feed = [];

	socket.emit('activity:changes:start', {});

	socket.on('activity:changes', change => {
		if(change.new_val === null) console.log(change.old_val.id); // remove using change.old_val.id
		else this.feed.push(change.new_val);
	});

	this.start = () => {
		socket.emit('activity:changes:start', { filter: { type: this.type } });
	}

	this.stop = () => {
		this.feed = []; // clear map
		socket.emit('activity:changes:stop'); // disconnect
	}

	this.change = () => {

	}

  this.getGeo = () => {
    let q = $q.defer();
    navigator.geolocation.getCurrentPosition(pos => { q.resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }); }, error => { q.reject(error); });
    return q.promise;
  }

  this.getGeo().then(res => this.center = res);

}
