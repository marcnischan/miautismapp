'use strict';

// Declare app level module which depends on filters, and services
var App = angular.module('app', ['ngSanitize', 'ngResource', 'ui.router', 'oc.modal', 'google-maps']);

App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
	function($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.hashPrefix('!');
		$urlRouterProvider.otherwise("/landing");

		$stateProvider.state('landing', {
			url: "/landing",
			views: {
				"headerView" : {
					templateUrl: "partials/header.html",
				},
				"mainView": {
					templateUrl: "partials/landing.html",
					controller: 'LandingCtrl'
				}
			}
		}).state('review', {
			url: "/review/:locationId",
			views: {
				"headerView" : {
					templateUrl:'partials/review-header.html'
				},
				"mainView": {
					templateUrl: "partials/review.html",
					controller: 'ReviewCtrl'
				}
			}
		})
		.state('about', {
			url: "/about",
			views: {
               "headerView" : {
		       templateUrl:'partials/review-header.html',
		       controller: 'ReviewHeaderCtrl'
		       },
		       "mainView": {
		           templateUrl: "partials/about.html"
		       }
			}
		});

		// Without server side support html5 must be disabled.
		return $locationProvider.html5Mode(false);
	}
]);