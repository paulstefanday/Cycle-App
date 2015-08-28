export default /*@ngInject*/ function($scope, socket) {

	this.activities = [];

	socket.emit('activity:changes:start', {});

	socket.on('activity:changes', change => {
		if(change.new_val) this.activities.push(change.new_val);
	});

	this.start = () => {
		let query = {}; // filter: {}
		socket.emit('activity:changes:start', query);
	}

	this.stop = () => {
		this.activities = []; // clear map
		socket.emit('activity:changes:stop'); // disconnect
	}

	this.change = () => {
		$scope.stop(); 
		$scope.start();
	}

}
