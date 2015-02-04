Blog.Services
	.factory('Post', ['$resource', function($resource){
		return $resource('http://localhost:3000/posts/:id',
			{ id: '@_id' },
			{
				query:	{method:'GET', isArray:true},
				get:	{method:'GET', params:{id:'_id'}, isArray:true},
				update:	{method: 'PUT'}
			},{
				stripTrailingSlashes: true
			});
	}]);
