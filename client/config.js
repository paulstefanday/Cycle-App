export default /*@ngInject*/ function($stateProvider, $urlRouterProvider, $authProvider) {

  $urlRouterProvider.otherwise("/");
  $authProvider.loginUrl = '/api/v1/login';
  $authProvider.signupUrl = '/api/v1/signup';
  $authProvider.loginRoute = '/';
  $authProvider.signupRoute = '/';
  $authProvider.tokenPrefix = 'cycleApp';
  $authProvider.authHeader = 'Authorization';
  $authProvider.authToken = '';

  // Facebook
  $authProvider.facebook({
    clientId: process.env.ENV === 'production' ? "535096706647433" : "535124743311296",
    url: '/api/v1/facebook',
    authorizationEndpoint: 'https://www.facebook.com/v2.4/dialog/oauth',
    scope: ["public_profile", "email", "user_birthday"],
  });

  // Routes
  $stateProvider
    .state('home', {
      url: "/",
      controllerAs: 'vm',
      controller: require('./views/home.js'),
      template: require('./views/home.jade'),
      resolve: /*@ngInject*/ ($auth, $location) => { if($auth.isAuthenticated()) $location.path('/map') }
    })
    .state('map', {
      url: "/map",
      controllerAs: 'vm',
      controller: require('./views/map.js'),
      template: require('./views/map.jade')
    })
}

