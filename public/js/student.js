(function() {
	angular.module('tutorApp').controller('studentCtrl', ['$scope','$compile'
	function($scope, $compile) {

    

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
    $scope.got0Profile = function() {
        var popupTemplate = document.createElement("div");
        popupTemplate.setAttribute("ng-include", "'/Billy.html'");

        // We give the popup a new scope, inherited from the current one.
        var popupScope = $scope.$new();
        popupScope.someValue = Math.random();
        var popupLinker = $compile(popupTemplate);
        var popupElement = popupLinker(popupScope);

        // popupElement is now a div that contains your template,
        // fully AngularJS enabled. How you display it as a popup
        // is up to you.
        myShowPopupFunction(popupElement);
        popupScope.$destroy();
        });
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
