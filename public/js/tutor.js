(function() {
	angular.module('tutorApp').controller('tutorCtrl', ['$scope',
	function($scope) {
		var vm = this;
		
		$scope.scheduleList = [];

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

<<<<<<< HEAD
		$scope.submitSchedule = function() {
			for (var i = 0; i < 24; i++) {
				for (var j = 1; j < 8; j++) {
					console.log($scope.scheduleList[i][j]);
				}
			}
		}


        $scope.eventClick = function(event){
        $scope.$apply(function(){
          $scope.alertMessage = (event.title + ' is clicked');
        });
    };

      $scope.renderView = function(view){
        var date = new Date(view.calendar.getDate());
        $scope.currentDate = date.toDateString();
        $scope.$apply(function(){
          $scope.alertMessage = ('Page render with date '+ $scope.currentDate);
        });
    };

        $scope.eventSources = [];
       $scope.uiConfig = {
          calendar:{
            height: "100%",
            editable: true,
            header:{
              left: 'month basicWeek basicDay agendaWeek agendaDay',
              center: 'title',
              right: 'today prev,next'
            },
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            viewRender: $scope.viewRender
          }
    };

        $scope.data = {
            repeatSelect: null,
            availableOptions: [
                {id: '1', name: 'University of Waterloo'},
                {id: '2', name: 'University of Toronto'},
                {id: '3', name: 'Wilfred Laurier University'}
        ],
    }
        
        
    

=======
>>>>>>> d1348a95cd988b0df55a89d3a7de4ecc11576c57
	}]);

})();
