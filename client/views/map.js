export default /*@ngInject*/ function ($scope, socket) {

	this.activities = [];

	socket.emit('activity:changes:start', {});

	socket.on('activity:changes', change => {
		if(change.new_val === null) console.log(change.old_val.id); // remove using change.old_val.id
		else this.activities.push(change.new_val);
	});

	this.start = () => {
		socket.emit('activity:changes:start', { filter: { type: this.type } });
	}

	this.stop = () => {
		this.activities = []; // clear map
		socket.emit('activity:changes:stop'); // disconnect
	}

	this.change = () => {

	}

}
