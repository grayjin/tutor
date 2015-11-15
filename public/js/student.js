(function() {
	angular.module('tutorApp').controller('studentCtrl', ['$scope',
	function($scope) {
    $scope.subject = {
        items: [{
            qty: 2,
            course_code: ""
        }]
    };
    $scope.submit = function() {
        if ($scope.text) {
          $scope.table.push(this.text);
          $scope.text = '';
        }
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
})();