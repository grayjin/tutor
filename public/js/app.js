var app = angular.module("tutorApp", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		console.log("Loading configs")
		$routeProvider
		.when('/', {
			templateUrl: '../pages/home.html',
		})
}]);