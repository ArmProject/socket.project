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
    js: ['src/**/*.js', '!src/**/*.spec.js', '!src/server/**/*.js'],
    jsunit: ['src/**/*.spec.js'],

    coffee: ['src/**/*.coffee', '!src/**/*.spec.coffee'],
    coffeeunit: ['src/**/*.spec.coffee'],

    atpl: ['src/app/**/**/*.tpl.html'],
    ctpl: ['src/common/**/*.tpl.html'],

    html: ['src/index.html'],
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
    nojs: [
      'vendor/pdf.js/build/pdf.js',
      'vendor/pdf.js/build/pdf.worker.js',
      'vendor/pdf.js/web/compatibility.js',
    ],
    nocss: [
      'vendor/ace/assets/css/ace.min.css',
      'vendor/ace/assets/css/ace-rtl.min.css',
      'vendor/ace/assets/css/ace-skins.min.css',
      'vendor/ace/assets/css/font-awesome.min.css',
      'vendor/ace/assets/font/*'
    ],
    js: [
      'vendor/socket.io/index.js',
      'vendor/fabric/dist/all.min.js',
      'vendor/jquery/jquery.min.js',
      'vendor/angular/angular.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.min.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'vendor/angular-gesture/pointerevents.js',
      'vendor/angular-gesture/ngGesture/gesture.js',
      'vendor/angular-gesture/ngGesture/directive/ngSwipe.js',
      'vendor/angular-gesture/ngGesture/directive/ngTouch.js',
      // 'vendor/bootstrap/dist/js/bootstrap.min.js',
      // 'vendor/bootstrap/dist/css/bootstrap.min.css',
      'vendor/google_api/index.js',
      'vendor/google_plus/index.js',
      'vendor/jspdf/index.js',
      'vendor/angular-loading-bar/build/loading-bar.min.js',
      'vendor/perfect-scrollbar/min/perfect-scrollbar-0.4.5.with-mousewheel.min.js',
      'vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
      'vendor/highcharts/index.js',
      'vendor/highcharts-ng/src/directives/highcharts-ng.js',

      'vendor/ace/assets/js/jquery-ui-1.10.3.custom.min.js',
      'vendor/ace/assets/js/ace.min.js',
      'vendor/ace/assets/js/ace-elements.min.js',
      'vendor/ace/assets/js/ace-extra.min.js',
      'vendor/ace/assets/js/bootstrap.min.js',
      // 'vendor/ace/assets/js/jquery.slimscroll.min.js',

    ],
    css: [
      'vendor/angular-loading-bar/build/loading-bar.css',
      'vendor/perfect-scrollbar/min/perfect-scrollbar-0.4.5.min.css',
      'vendor/angular-bootstrap-colorpicker/css/colorpicker.css',
      'vendor/ace/assets/css/bootstrap.min.css',
      'vendor/ace/assets/css/jquery-ui-1.10.3.custom.min.css',
    ]
  },
};