describe('Blog App', function() {

	describe('Post list view', function() {

		beforeEach(function() {
			browser.get('app/index.html');
		});


		it('should filter the post list as a user types into the search box', function() {

			var phoneList = element.all(by.repeater('post in posts'));
			var query = element(by.model('query'));

			expect(phoneList.count()).toBe(3);

			query.sendKeys('test 1');
			expect(phoneList.count()).toBe(1);

			query.clear();
			query.sendKeys('test');
			expect(phoneList.count()).toBe(3);
		});
	});
});
