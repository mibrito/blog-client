Blog.Services
	.factory('Post', ['$resource', function($resource){
		return $resource('http://localhost:3000/posts/:postId',
			{ postId: '@_id' },
			{
				query:	{method:'GET', isArray:true},
				update:	{method: 'PUT'}
			},{
				stripTrailingSlashes: true
			});
	}]);
