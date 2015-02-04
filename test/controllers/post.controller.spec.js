describe("Blog Controllers", function () {

	beforeEach(function(){
		jasmine.addMatchers({
			toEqualData: function() {
				return {
					compare: function(actual, expected){
						return {
							pass: angular.equals(actual, expected)
						};
					}
				};
			}
		});
	});

	beforeEach(module('blog'));
	beforeEach(module('blog.services'));

	describe("postController", function () {
		var scope,
			ctrl,
			$httpBackend;

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('http://localhost:3000/posts').
				respond([{
					"content":"Esse e o conteudo do meu post",
					"title":"Novo Post de Teste",
					"_id":"54ccb3adbc017e9b3d3fadce",
					"__v":0,
					"created_at":"2015-01-31T10:51:25.838Z"
				}]);

			scope = $rootScope.$new();
			ctrl = $controller('postController', {$scope: scope});
		}));


		it('should create "posts" model with 1 posts fetched from xhr', function() {
			expect(scope.posts).toEqualData([]);

			$httpBackend.flush();

			expect(scope.posts).toEqualData(
				[{
					"content":"Esse e o conteudo do meu post",
					"title":"Novo Post de Teste",
					"_id":"54ccb3adbc017e9b3d3fadce",
					"__v":0,
					"created_at":"2015-01-31T10:51:25.838Z"
				}]);
			});


		it('should set the default value of orderProp model', function() {
			expect(scope.orderProp).toBe("created_at");
		});
	});

});
