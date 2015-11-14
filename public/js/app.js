(function() {
	var app = angular.module("tutorApp", ['ngRoute']);

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

			$locationProvider.html5Mode(true);
	}]);


})();