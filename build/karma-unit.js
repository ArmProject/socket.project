module.exports = function(karma) {
	karma.set({
		/** 
		 * From where to look for files, starting with the location of this file.
		 */
		basePath: '../',

		/**
		 * This is the list of file patterns to load into the browser during testing.
		 */
		files: [
			// 'vendor/socket.io/index.js',
			// 'vendor/kineticjs/index.js',
			// 'vendor/jquery/jquery.min.js',
			// 'vendor/fabric/dist/all.min.js',
			// 'vendor/angular/angular.min.js',
			// 'vendor/angular-gesture/pointerevents.js',
			// 'vendor/angular-gesture/ngGesture/gesture.js',
			// 'vendor/angular-gesture/ngGesture/directive/ngSwipe.js',
			// 'vendor/angular-gesture/ngGesture/directive/ngTouch.js',
			// 'vendor/angular-ui-router/release/angular-ui-router.min.js',
			// 'vendor/bootstrap/dist/js/bootstrap.min.js',
			// 'vendor/google_api/index.js',
			// 'vendor/google_plus/index.js',
			// 'vendor/pdf.js/build/pdf.js',
			// 'vendor/pdf.js/build/pdf.worker.js',
			// 'vendor/pdf.js/web/compatibility.js',
			// 'vendor/jspdf/index.js',
			// 'vendor/angular-loading-bar/build/loading-bar.min.js',
			// 'build/templates-app.js',
			// 'build/templates-common.js',
			// 'vendor/angular-mocks/angular-mocks.js',
			// 
			// 'src/**/*.spec.js'
		],

		exclude: [
			// 'src/**/*.spec.js',
			'src/server/**/*.js'
		],
		frameworks: ['ng-scenario'],
		plugins: ['karma-ng-scenario','karma-jasmine', 'karma-chrome-launcher'],

		/**
		 * How to report, by default.
		 */
		reporters: 'dots',

		/**
		 * On which port should the browser connect, on which port is the test runner
		 * operating, and what is the URL path for the browser to use.
		 */
		port: 9876,
		runnerPort: 9100,
		// proxies: {
		// 	'/': 'http://localhost/socket'
		// },
		// urlRoot: '/__karma__/',
		/** 
		 * Disable file watching by default.
		 */
		autoWatch: false,

		/**
		 * The list of browsers to launch to test on. This includes only "Firefox" by
		 * default, but other browser names include:
		 * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
		 *
		 * Note that you can also use the executable name of the browser, like "chromium"
		 * or "firefox", but that these vary based on your operating system.
		 *
		 * You may also leave this blank and manually navigate your browser to
		 * http://localhost:9018/ when you're running tests. The window/tab can be left
		 * open and the tests will automatically occur there during the build. This has
		 * the aesthetic advantage of not launching a browser every time you save.
		 */

		// browsers: [
		//   'Firefox'
		// ]
	});
};