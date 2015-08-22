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

  // Facebook
  $authProvider.facebook({
    clientId: '535124743311296',
    url: '/api/v1/facebook',
    authorizationEndpoint: 'https://www.facebook.com/v2.4/dialog/oauth',
    redirectUri: (window.location.origin || window.location.protocol + '//' + window.location.host) + '/',
    scope: ["public_profile", "email", "user_birthday"],
    scopeDelimiter: ',',
    requiredUrlParams: ['display', 'scope'],
    display: 'popup',
    type: '2.4',
    popupOptions: { width: 580, height: 400 }
  });

  $stateProvider
    .state('home', {
      url: "/",
      controller: require('./views/home.js'),
      template: require('./views/home.jade')
    })
    .state('map', {
      url: "/map",
      controller: require('./views/map.js'),
      template: require('./views/map.jade')
    })
    .state('report', {
      url: "/report",
      resolve: { auth: ($auth, $q, $state) => {
        let q = $q.defer();
        if($auth.isAuthenticated()) q.resolve();
        else $state.go('home');
        return q.promise;
      }},
      controller: require('./views/report.js'),
      template: require('./views/report.jade')
    })
}


