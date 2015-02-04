_blog = angular.module('blog');
_blog.config(['$routeProvider', function($routeProvider) {

	$routeProvider

	// home page
	.when('/', {
		templateUrl: 'views/home.html'
	})

	// nerds page that will use the NerdController
	.when('/posts', {
		templateUrl: 'views/posts.html',
		controller: 'postController'
	})
	.when('/post/:id/view', {
		templateUrl: 'views/posts.html',
		controller: 'postController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
