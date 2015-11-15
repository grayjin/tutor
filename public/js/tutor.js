(function() {
	angular.module('tutorApp').controller('tutorCtrl', ['$scope',
	function($scope, uiCalendarConfig) {
		var vm = this;
		$scope.scheduleList = [];

		$scope.subject = {
        items: [{
            qty: 2,
            course_code: ""
        }]};
        
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
        
        $scope.eventSources = [];
       $scope.uiConfig = {
          calendar:{
            height: 950,
            editable: true,
            header:{
              left: 'month basicWeek basicDay agendaWeek agendaDay',
              center: 'title',
              right: 'today prev,next'
            },
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
          }
    };
      
        $scope.data = {
            repeatSelect: null,
            availableOptions: [
                {id: '1', name: 'University of Waterloo'},
                {id: '2', name: 'University of Toronto'},
                {id: '3', name: 'Wilfred Laurier University'}
        ],
    };

	}]);
    
    

})();