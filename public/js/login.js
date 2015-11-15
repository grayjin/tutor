(function() {
	angular.module('tutorApp').controller('loginCtrl', ['$scope', '$http', 'auth', 'store', '$location',
		function ($scope, $http, auth, store, $location) {
			$scope.loggedIn = false;

		  $scope.login = function () {
		    auth.signin({}, function (profile, token) {
		      $scope.loggedIn = true;
  				$scope.auth = auth;
		      // Success callback
		      store.set('profile', profile);
		      store.set('token', token);
		      $location.path('/');
             
                hashCode = function(str){
                    var hash = 0;
                    if (str.length == 0) return hash;
                    for (i = 0; i < str.length; i++) {
                        char = str.charCodeAt(i);
                        hash = ((hash<<5)-hash)+char;
                        hash = hash & hash; // Convert to 32bit integer
                    }
                    return hash;
                }
            var oldid = auth.profile.user_id;   
            var newid = oldid.replace(/^\D+\w+\|/g, ""); 
            var id = hashCode(newid);    
            var name = auth.profile.name;   
              $http({method: 'POST', url: '/?id='+id+'&name='+name}).success(function(data,status){
                alert('Record added');
                  $scope.dataset = data;});
                
                
                
                
                
		    }, function () {
		      // Error callback
		    });
		  }

		  $scope.logout = function() {
		      $scope.loggedIn = false;
		    	console.log("Logout");
			  auth.signout();
			  store.remove('profile');
			  store.remove('token');
		  }
	}]);
})();