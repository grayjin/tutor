(function() {
	angular.module('tutorApp').controller('profileCtrl', ['$scope', 'auth',
	function($scope, auth) {
		var vm = this;
		vm.myID = auth.profile.user_id;

		vm.editMode = false;

		$scope.profileSummary = "";
		$scope.profileLocation = 0;

		$scope.tempSummary = "";
		$scope.tempLocation = "";

		$scope.availableOptions =[
			"Wilfred Laurier University",
			"University of Waterloo",
			"University of Toronto",
			"Ryerson University",
			"University of Calgary"
		]

		$scope.initializeProfile = function(){
			$scope.profileSummary = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			$scope.profileLocation = 1;
		}

		$scope.editMode = function(){
			$scope.tempSummary = $scope.profileSummary;
			$scope.tempLocation = $scope.profileLocation;
			vm.editMode = true;
		}

		$scope.cancelEdit = function() {
			$scope.profileSummary = $scope.tempSummary;
			$scope.profileLocation = $scope.tempLocation;
			vm.editMode = false;
		}

		$scope.submit = function(){
			vm.editMode = false;
		}

		$scope.getEditMode = function() {
			return vm.editMode;
		}

    $scope.switch1 = "Student \n Calendar";
    $scope.switch2 = "Tutor \n Calendar"
    $scope.switch = $scope.switch1

    $scope.viewToggle = function() {
      if($scope.switch == $scope.switch1){
        $scope.switch = $scope.switch2

      } else if($scope.switch == $scope.switch2){
        $scope.switch = $scope.switch1

      }
    }

	}]);

})();
