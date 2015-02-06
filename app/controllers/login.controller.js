Blog.Controllers
	.controller('LoginCtrl', ['$scope', '$location',
		function($scope, $location){
			$scope.credentials = { username: "", password: ""};

			$scope.login = function(){
				if($scope.credentials.username === "ralph"){
					$location.path('/posts');
				}
			};
		}
	]
);
