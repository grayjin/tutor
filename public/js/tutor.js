(function() {
	angular.module('tutorApp').controller('tutorCtrl', ['$scope', 'moment',
	function($scope, moment) {
		var vm = this;
		
		$scope.scheduleList = [];
		$scope.dateArray = [];

		$scope.subject = {
        items: [{
            qty: 2,
            course_code: ""
        }]};

	    $scope.schools = 
	    [{
	        name: 'University of Waterloo',
	    },
	    {
	        name: 'University of Toronto',
	    }, 
	    {
	        name: 'Wilfred Laurier University',
	    },
	    {
	        name: 'Ryerson University',
	    },
	    {
	        name: 'University of Calgary',
	    }];

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

		$scope.initializeList = function() {
			console.log("initializeList");

			$scope.dateArray.push("Time");
			
			for (var i = 0; i < 7; i++){
				var date = moment().add(i, 'days');
				$scope.dateArray.push(date.format("l"));
			}

			for(var i = 0; i < 24; i++) {
				var dayArray = [];

				dayArray.push(i+":00");
				for(var j = 0; j < 7; j++) {
					dayArray.push(0);
				}

				$scope.scheduleList.push(dayArray);
			}
			console.log($scope.scheduleList);
		}

		$scope.getScheduleType = function(type) {
			if (type === 1){
				return "selectedBlock";
			} else if (type === 0 ){
				return "unselectedBlock";
			} else {
				return "timeLabel"
			}
		}

		$scope.toggleSection = function (date, time){
			if (time != 0){
				$scope.scheduleList[date][time] = ($scope.scheduleList[date][time] + 1) % 2;
			}
		}

		$scope.submitSchedule = function() {
			for (var i = 0; i < 24; i++) {
				for (var j = 1; j < 8; j++) {
					console.log($scope.scheduleList[i][j]);
				}
			}
		}
        

	}]);

})();
