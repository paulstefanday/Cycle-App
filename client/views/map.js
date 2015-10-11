export default /*@ngInject*/ function ($scope, $q, $http, SweetAlert) {

	this.markers = []
  this.style = { width: '100%', height: '100%', position: 'absolute', float:'left', top: 0, left: 0 };
  this.colours = [ { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "color": "#60dd8e" } ] },{ "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "elementType": "geometry.stroke", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#b2e5f4" } ] },{ } ];

  this.getGeo = () => {
    let q = $q.defer();
    navigator.geolocation.getCurrentPosition(pos => {
      this.center = { latitude: pos.coords.latitude, longitude: pos.coords.longitude } || { latitude: -33.87, longitude: 151.2 };
      q.resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
    }, error => { q.reject(error); });
    return q.promise;
  }

  $scope.$on('mapInitialized', (event, map) => {
    // map.addListener('center_changed', () => console.log('changed') );
    map.addListener('mouseup', () => this.getMarkers(3000, map.center.J, map.center.M ) );
  });

  this.getMarkers = (distance, latitude, longitude) => {
    $http.post(`/api/v1/activity/${distance}`, { latitude, longitude })
      .then(res => this.markers = res.data )
  }


  // Report
  this.report = () => {
    this.laddaLoading = true;
    this.getGeo()
      .then(res => $http.post('/api/v1/activity', { latitude: res.latitude, longitude: res.longitude }))
      .then(res => {
        this.markers.push(res.data)
        SweetAlert.swal("It worked!", "Report sent successfully!", "success")
        this.laddaLoading = false
      })
      .catch(error => {
        SweetAlert.swal("It failed!", "Please try again", "error")
        this.laddaLoading = false
      })
  }

  this.getGeo()
    .then(res => this.getMarkers(3000, this.center.latitude, this.center.longitude ) )

}


