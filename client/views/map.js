export default /*@ngInject*/ function ($scope, socket) {

	$scope.activities = [];

	socket.emit('activity:changes:start', { filter: { type: 'Petition'}});

	socket.on('activity:changes', function (change) {
		if(change.new_val === null) console.log(change.old_val.id); // remove using change.old_val.id
		else $scope.activities.push(change.new_val);
	});

	$scope.start = () => {
		socket.emit('activity:changes:start', { filter: { type: $scope.type }});
	}

	$scope.stop = () => {
		// clear map
		$scope.activities = [];
		// disconnect
		socket.emit('activity:changes:stop');
	}

	// $scope.change = () => {
	// 	console.log('changed')
	// 	if($scope.activities.length > 0) {
	// 		console.log('changed with records')
	// 		socket.emit('disconnect', () => { console.log('disocnnect callback'); socket.emit('activity:changes:start', { filter: { type: $scope.type }}); });
			
	// 	}
	// }

}