(function() {
	angular.module('tutorApp').controller('tutorCtrl', ['$scope',
	function($scope) {
		var vm = this;
		//just testing something
		$scope.tutorLists = {
        items: [{
            qty: 2,
            cost: 0
        }]
    	};
		$scope.scheduleList = [];
		
		//dummy values
		$scope.tutorList = {{
        	name: 'Bill',
        	timings: {(2,3),(3,4),(5,6)},
        	id: "123123"
        },
        {
        	name:'Monty',
        	timings: {(1,2),(2,3),(3,4)},
        	id: "1223423"
        },
        {
        	name:'Python',
        	timings: {6,7),(7,8),(9,10)},
        	id: "2342343425"
    	}};

		$scope.initializeList = function() {
			console.log("initializeList");
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