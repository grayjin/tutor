(function() {
	var app = angular.module("tutorApp", ['ngRoute', 'auth0', 'angular-storage', 'angular-jwt']);

	app.config(function (authProvider) {
		authProvider.init({
			domain: 'YOUR_NAMESPACE',
			clientID: 'YOUR_CLIENT_ID'
		});
	})
	app.run(function(auth) {
	  // This hooks al auth events to check everything as soon as the app starts
	  auth.hookEvents();
	});
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