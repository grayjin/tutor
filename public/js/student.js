(function() {
	angular.module('tutorApp').controller('studentCtrl', ['$scope','$compile',
	function($scope, $compile) {
    
    $scope.results = false;

    $scope.profilePage = false;

    $scope.profileName = "";
    $scope.profileSummary = "";
    $scope.profileLocation = "";

    $scope.confirm = false;
    $scope.chosenName = "";
    $scope.chosenDate = "";
    $scope.chosenTime = "";
    $scope.chosenID = "";

    $scope.subject = {
        items: [{
            qty: 2,
            course_code: ""
        }]
    };
    //dummy values
    $scope.tutorList = [
        {
            "name": "Billy",
            "ID": "123519",
            "times": [
                {
                    "date":"15/23/13",
                    "time":"12:00"
                },
                {   "date":"12/32/11",
                    "time":"15:00"
                },
                {
                    "date":"15/23/13",
                    "time":"12:00"
                },
                {   "date":"12/32/11",
                    "time":"15:00"
                },
                {
                    "date":"15/23/13",
                    "time":"12:00"
                },
                {   "date":"12/32/11",
                    "time":"15:00"
                },
                {
                    "date":"15/23/13",
                    "time":"12:00"
                },
                {   "date":"12/32/11",
                    "time":"15:00"
                }
            ]
        },
        {
            "name": "Monty",
            "ID": "124160",
            "times": [
                {
                    "date":"15/23/13",
                    "time":"12:00"
                },
                {   "date":"09/32/11",
                    "time":"15:00"
                }
            ]
        },
        {
            "name": "Python",
            "ID": "890729",
            "times": [
                {
                    "date":"15/23/13",
                    "time":"12:00"
                },
                {   "date":"12/32/11",
                    "time":"15:00"
                }
            ]
        }
    ];

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


    // This function makes a query based on scope.subject and returns all the tutors and their availabilites and stores them into the tutorList object with the given keys as per example
    $scope.submit = function() {
        if ($scope.text) {
          $scope.table.push(this.text);
          $scope.text = '';
        }

        $scope.results = true;
    };
    
    $scope.got0Profile = function() {
         it('should check ng-show / ng-hide', function() {
            element(by.model('checked')).click();
            });
       }
    $scope.addItem = function () {
        $scope.subject.items.push({
            qty: 1,
        });
    },
    $scope.removeItem = function (index) {
        if($scope.subject.items.length > 1){
            $scope.subject.items.splice(index, 1);
        }
    }

    $scope.isThereResults = function() {
        return $scope.results;
    }

    // called when button is clicked, retrieve profile location and summary based on given ID
    $scope.toggleDisplay = function(id, name) {
        $scope.profileName = name;
        $scope.profileLocation = "University of Waterloo"
        $scope.profileSummary = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        $scope.profilePage = true;

    }

    $scope.closeDisplay = function() {
        $scope.profilePage = false;
    }

    $scope.displayProfile = function() {
        return $scope.profilePage;
    }

    $scope.displayConfirm = function() {
        return $scope.confirm;
    }

    // sets global variables to what we need to save to database for confirmation of appointment
    $scope.openConfirm = function(id, name, date, time) {
        $scope.chosenName = name;
        $scope.chosenTime = time;
        $scope.chosenDate = date;
        $scope.chosenID = id;
        $scope.confirm = true;
    }

    $scope.closeConfirm = function(){
        $scope.confirm = false;
    }

    // send global variables to the database
    $scope.confirmSelections = function () {
        console.log("I have confirmed my selections");
        $scope.confirm = false;
    }
	}]);
})();
