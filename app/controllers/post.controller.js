Blog.Controllers
	.controller('PostListCtrl',[ '$scope', '$location', 'Post',
		function ($scope, $location , Post) {

			//$scope.post = new Post();
			$scope.posts = Post.query();
			$scope.orderProp = "created_at";

			//console.log($scope.posts);

			$scope.save = function () {
				$scope.post.$save();
				$scope.posts.push($scope.post);
				$scope.post = new Post();
			};

			$scope.delete = function (post) {
				Post.delete(post);
				_.remove($scope.posts, post);
			};

			$scope.logout = function(){
				$location.path('/login');
			};
		}
	]
);

Blog.Controllers
	.controller('PostDetailCtrl', ['$scope', '$routeParams', 'Post',
		function($scope, $routeParams, Post) {
			$scope.postId = $routeParams.postId;
			$scope.post = Post.get({postId: $routeParams.postId});
		}
	]
);
var _post = {};
_post.controller = function ($scope,Post) {

};
