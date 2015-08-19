export default /*@ngInject*/ function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      controller: require('./views/home.js'),
      template: require('./views/home.jade')
    })
    .state('map', {
      url: "/map",
      controller: require('./views/map.js'),
      templateUrl: require('./views/map.jade')
    })
    // .state('report', {
    //   url: "/report",
    //   controller: require('./views/report.js'),
    //   templateUrl: require('./views/report.jade')
    // })
}


