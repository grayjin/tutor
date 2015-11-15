angular.module('tutorApp').directive('controlcourse', function() {
	return {
		template: <div>
					<h2> Course Selection </h2>
					<form ng-submit="submit()" method = "post" action = "">
				    <table class="table">
				        <tr>
				            <th>Description</th>
				            <th>Course Code</th>
				            <th>Remove Course</th>
				        </tr>
				        <tr></tr>
				        <tr ng:repeat="item in subject.items">
				            <td>
				                <input type="text" name:"subject" </input>
				            </td>
				            <td>
				            	<input type="text" name:"course_ code"</input>
				            </td>
				            <td>[<a href ng:click="removeItem($index)">X</a>]</td>
				        </tr>
				        <tr>
				            <td><a href ng:click="addItem()" class="btn btn-small">add Course</a>

				            </td>
				        </tr>
				    </table>
					  <input type="submit" id="submit" value="Submit" />
					</form>
				</div>
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

