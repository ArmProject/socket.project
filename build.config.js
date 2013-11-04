/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: 'build',
  compile_dir: 'bin',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js','!src/server/**/*.js'],
    jsunit: [ 'src/**/*.spec.js' ],
    
    coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
    coffeeunit: [ 'src/**/*.spec.coffee' ],

    atpl: [ 'src/app/**/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less',
  },

  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`vendor/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   */
  vendor_files: {
    js: [
      'vendor/socket.io/index.js',
      'vendor/kineticjs/index.js',
      'vendor/jquery/jquery.min.js',
      'vendor/fabric/dist/all.min.js',
      'vendor/angular/angular.min.js',
      'vendor/angular-touch/angular-touch.min.js',
      'vendor/angular-route/angular-route.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.min.js',
      'vendor/bootstrap/dist/js/bootstrap.min.js',
      'vendor/bootstrap/dist/css/bootstrap.min.css',
      'vendor/underscore/underscore-min.js',
      'vendor/slick-quiz/js/slickQuiz.js',
      'vendor/slick-quiz/css/master.css',
      'vendor/slick-quiz/css/slickQuiz.css',
      'vendor/google_api/index.js',
      'vendor/google_plus/index.js',
      'vendor/pdf.js/build/pdf.js',
      'vendor/pdf.js/build/pdf.worker.js',
      'vendor/pdf.js/web/compatibility.js',
      'vendor/jspdf/index.js'
    ],
    css: [
    ]
  },
};