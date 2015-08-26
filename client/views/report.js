export default /*@ngInject*/ function ($q, $http, $auth) {

  this.report = () => {

    this.getGeo()
      .then(res => { console.log({ latitude: res.latitude, longitude: res.longitude }); return $http.post('/api/v1/activity', { latitude: res.latitude, longitude: res.longitude }); })
      .then(res => console.log(res))
      .catch(error => console.log('Unable to get location', error))
  }

  this.user = $auth.getPayload();

  this.logout = () => { $auth.logout(); };

  this.getGeo = () => {
    let q = $q.defer();
    navigator.geolocation.getCurrentPosition(pos => { q.resolve(pos.coords); }, error => { q.reject(error); });
    return q.promise;
  }

}
