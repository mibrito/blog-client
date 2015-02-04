Blog.Routes.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/posts', {
				templateUrl: 'views/post-list.html',
				controller: 'PostListCtrl'
			}).
			when('/posts/:postId', {
				templateUrl: 'views/post-detail.html',
				controller: 'PostDetailCtrl'
			}).
			otherwise({
				redirectTo: '/posts'
			});
	}
]);
