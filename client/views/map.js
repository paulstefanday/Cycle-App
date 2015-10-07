export default /*@ngInject*/ function ($scope, $q, $http, SweetAlert) {

	this.markers = []
  this.style = { width: '100%', height: '100%', position: 'absolute', float:'left', top: 0, left: 0 };
  this.colours = [ { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "color": "#60dd8e" } ] },{ "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "elementType": "geometry.stroke", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#b2e5f4" } ] },{ } ];
  // this.center = { latitude: -33.87, longitude: 151.2 };

  this.getGeo = () => {
    let q = $q.defer();
    navigator.geolocation.getCurrentPosition(pos => {
      q.resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
    }, error => {
      q.reject(error);
    });
    return q.promise;
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
    .then(res => {
      this.center = res;
      return $http.get('/api/v1/activity')
    })
    .then(res => this.markers = res.data);

}


