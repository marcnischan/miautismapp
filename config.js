
var path = require('path');

exports.config = {
	// See docs at https://github.com/brunch/brunch/blob/master/docs/config.md
	modules: {
		definition: false,
		wrapper: false
	},
	paths: {
		"public": 'public',
		"watched": ['app', 'vendor', 'bower_components']
	},
	files: {
		javascripts: {
			joinTo: {
				'js/app.js': /^app/,
				'js/vendor.js': function(path) {
					path = path.replace(/\\/g, '/');
					switch(path) {
						case 'bower_components/modernizr/modernizr.js':

						// jquery
						case 'bower_components/jquery/dist/jquery.min.js':

						// lodash
						case 'bower_components/lodash/dist/lodash.js':

						// angular
						case 'bower_components/angular/angular.js':
						case 'bower_components/angular-animate/angular-animate.min.js':
						case 'bower_components/angular-resource/angular-resource.js':
						case 'bower_components/angular-sanitize/angular-sanitize.js':
						case 'bower_components/angular-ui-router/release/angular-ui-router.js':
						case 'bower_components/ocModal/ocModal.js':

						// underscrore
						case 'bower_components/underscore/underscore.js':

						//google-maps
						case 'bower_components/angular-google-maps/dist/angular-google-maps.min.js':

						// bootstrap
						case 'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap.js':
							return true;

						default:
							return false;
					}
				},
				'test/scenarios.js': /^test(\/|\\)e2e/
			},
			order: {
				before: [
					'bower_components/respond/respond.src.js',
					'bower_components/console-polyfill/index.js',

					// jquery
					'bower_components/jquery/jquery.js',

					// angular
					'bower_components/angular/angular.js'
				],
				after: [
					'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap.js'
				]
			}
		},
		stylesheets: {
			joinTo: {
				'css/app.css': /^app/
			}
		}
	},

	server: {
		path: 'jst-server.js'
	},

	conventions: {
		assets: /app(\\|\/)assets(\\|\/)/
	},

	sourceMaps: true
};

//angular.module('miautismapp', ['ui.bootstrap']);