exports.config = {
	allScriptsTimeout: 11000,

	specs: [
		'e2e/**/*.js'
	],

	chromeDriver: './node_modules/chromedriver/bin/chromedriver',

	capabilities: {
		'browserName': 'chrome'
	},

	directConnect: true,

	baseUrl: 'http://localhost:8080/',

	framework: 'jasmine',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
};
