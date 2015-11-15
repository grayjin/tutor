(function() {
	var app = angular.module("tutorApp", ['ngRoute', 'auth0', 'angular-storage', 'angular-jwt','ui.calendar']);


    
	app.config(function (authProvider) {
		authProvider.init({
			domain: 'app43881343.auth0.com',
			clientID: 'XPO2Sy0WgYd5XQPPvFxeGCZLhWlcvQWI'
		});
	})
	app.run(function(auth) {
	  // This hooks al auth events to check everything as soon as the app starts
	  auth.hookEvents();
	});

	app.run(function($rootScope, auth, store, jwtHelper, $location) {
	  // This events gets triggered on refresh or URL change
	  $rootScope.$on('$locationChangeStart', function() {
	    var token = store.get('token');
	    if (token) {
	      if (!jwtHelper.isTokenExpired(token)) {
	        if (!auth.isAuthenticated) {
	          auth.authenticate(store.get('profile'), token);
	        }
	      } else {
	        // Either show the login page or use the refresh token to get a new idToken
	        $location.path('/');
	      }
	    }
	  })});

	app.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			console.log("Loading configs")
			$routeProvider
			.when('/', {
				templateUrl: '../pages/home.html',
			})
			.when('/student', {
				templateUrl: '../pages/student.html',
				controller:'studentCtrl',
				controllerAs: 'studentCtrl'
			})
			.when('/tutor', {
				templateUrl: '../pages/tutor.html',
				controller:'tutorCtrl',
				controllerAs: 'tutorCtrl'
			})
			.when('/profile', {
				templateUrl: '../pages/profile.html',
				controller:'profileCtrl',
				controllerAs: 'profileCtrl'
			})
			.when('/test', {
				templateUrl: '../pages/test.html',
				controller:'testCtrl',
				controllerAs: 'testCtrl'
			})

			$locationProvider.html5Mode(true);
		}]);


})();