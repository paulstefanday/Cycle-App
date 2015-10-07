export default /*@ngInject*/ function ($scope, $q, $http, SweetAlert) {

	this.feed = []

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
        SweetAlert.swal("It worked!", "Report sent successfully!", "success")
        this.laddaLoading = false;
      })
      .catch(error => {
        SweetAlert.swal("It failed!", "Please try again", "error")
        this.laddaLoading = false;
      })
  }

  this.getGeo().then(res => this.center = res);

}
