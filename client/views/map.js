import { style, colours } from './map.data';

export default /*@ngInject*/ function ($scope, $q, $http, SweetAlert, $timeout) {

	this.markers = []
  this.style = style
  this.colours = colours
  this.distance = 3000

  // Map
  this.getGeo = () => {
    let q = $q.defer();
    navigator.geolocation.getCurrentPosition(pos => {
      this.center = { latitude: pos.coords.latitude, longitude: pos.coords.longitude }; // || { latitude: -33.87, longitude: 151.2 };
      q.resolve(this.center);
    }, error => { q.reject(error); });
    return q.promise;
  }

  $scope.$on('mapInitialized', (event, map) => {
    map.addListener('mouseup', () => this.getMarkers(this.distance, map.center.lat(), map.center.lng()) );
  });

  this.getMarkers = (distance, latitude, longitude) => {
    console.log({ latitude, longitude })
    $http.post(`/api/v1/activity/geo/${distance}`, { latitude, longitude })
      .then(res => this.markers = res.data)
  }

  // Report
  this.showReport = () => this.reporting = true;

  this.report = (type) => {
    this.reporting = false;
    this.laddaLoading = true;
    this.getGeo()
      .then(res => $http.post('/api/v1/activity', { type: type, latitude: res.latitude, longitude: res.longitude }))
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

  // Init
  this.getGeo().then(res =>
    this.getMarkers(this.distance, this.center.latitude, this.center.longitude )
  )

}


