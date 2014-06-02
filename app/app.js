'use strict';

// Declare app level module which depends on filters, and services
var App = angular.module('app', ['ngSanitize', 'ngResource', 'ui.router', 'oc.modal']);

App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
	function($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.hashPrefix('!');
		$urlRouterProvider.otherwise("/landing");

		$stateProvider.state('landing', {
		   url: "/landing",
		   views: {
		       "mapView": {
		           templateUrl: "partials/landing-map.html",
		           controller: 'MapCtrl'
		       },
		       "mainView": {
		           templateUrl: "partials/landing.html",
		           controller: 'LandingCtrl'
		       }
		   }
		}).state('review', {
			url: "/review/:locationId",
			views: {
		       "mapView": {
		           templateUrl: "partials/review-map.html",
		           controller: 'ReviewMapCtrl'
		       },
		       "mainView": {
		           templateUrl: "partials/review.html",
		           controller: 'ReviewCtrl'
		       }
			}
		}).state('todo', {
			url: "/todo",
			views: {
				"mainView": {
					templateUrl: "partials/todo.html",
					controller: 'TodoCtrl'
				},
				"reviewsView": {
	                templateUrl: "partials/reviews.html",
	                controller: 'reviewsDB'
				}
			}
		}).state('view', {
			url: "/view",
			views: {
				"mainView": {
					templateUrl: "partials/partial.html",
					controller: 'MyCtrl'
				}
			}
		});

		// Without server side support html5 must be disabled.
		return $locationProvider.html5Mode(false);
	}
]);