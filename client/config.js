
export default /*@ngInject*/ function($stateProvider, $urlRouterProvider, $authProvider) {

  $urlRouterProvider.otherwise("/");

  $authProvider.loginRedirect = '/report';
  $authProvider.logoutRedirect = '/';
  $authProvider.signupRedirect = '/report';
  $authProvider.loginUrl = '/api/v1/login';
  $authProvider.signupUrl = '/api/v1/signup';
  $authProvider.loginRoute = '/';
  $authProvider.signupRoute = '/';
  $authProvider.tokenPrefix = 'cycleApp';
  $authProvider.authHeader = 'Authorization';
  $authProvider.authToken = '';
  $authProvider.cordova = true;

  // Facebook
  $authProvider.facebook({
    clientId: process.env.ENV === 'production' ? "535096706647433" : "535124743311296",
    url: '/api/v1/facebook',
    authorizationEndpoint: 'https://www.facebook.com/v2.4/dialog/oauth',
    scope: ["public_profile", "email", "user_birthday"],
    type: '2.4',
  });


  $stateProvider
    .state('home', {
      url: "/",
      controllerAs: 'vm',
      controller: require('./views/home.js'),
      template: require('./views/home.jade')
    })
    .state('map', {
      url: "/map",
      controllerAs: 'vm',
      controller: require('./views/map.js'),
      template: require('./views/map.jade')
    })
    .state('report', {
      url: "/report",
      resolve: {
        auth: /*@ngInject*/ ($auth, $q, $state) => {
          let q = $q.defer();
          if($auth.isAuthenticated()) q.resolve();
          else $state.go('home');
          return q.promise;
        }
      },
      controllerAs: 'vm',
      controller: require('./views/report.js'),
      template: require('./views/report.jade')
    })
}

