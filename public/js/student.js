(function() {
	angular.module('tutorApp', ["ngAnimate"]).controller('studentCtrl', ['$scope',
	function($scope) {
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
    $scope.submit = function() {
        if ($scope.text) {
          $scope.table.push(this.text);
          $scope.text = '';
        }
    };
    $scope.got0Profileid = function() {
        var promise = modals.open(
            "clicked",
            {
                message: "Hi, I'm " + tutorList.name + ". I like fishing because then... I can feed baby seals. I also enjoy looking at geodes and watching Jersay Shore in my free time."
            }
        );
        promise.then(
            function handleResolve( response ) {
                console.log( "Tutor selected" );
            },
            function handleReject( error ) {
                console.warn( "Alert rejected!" );
            }
        );
    }
    $scope.got0Profilename = function() {

    }
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
