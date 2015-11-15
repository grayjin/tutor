angular.module('tutorApp').directive('controlcourse', function() {
	return {
        templateUrl: 'CourseSelection.html',
        controller: (function() {
				angular.module('tutorApp').controller('studentCtrl', ['$scope',
				function($scope) {
			    $scope.subject = {
			        items: [{
			            qty: 2,
			            course_code: ""
			        }]
			    };
			    $scope.addItem = function () {
			        $scope.subject.items.push({
			            qty: 1,
			        });
			    },
			    $scope.removeItem = function (index) {
			        $scope.subject.items.splice(index, 1);
			    }
				}]);
			})(); //Embed a custom controller in the directive
});

