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
App.controller('AppCtrl', [
	'$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
		// Uses the url to determine if the selected
		// menu item should have the class active.
		
		
        
		$scope.$location = $location;
		$scope.$watch('$location.path()', function(path) {
			return $scope.activeNavId = path || '/';
		});
		/* getClass compares the current url with the id.
		 * If the current url starts with the id it returns 'active'
		 * otherwise it will return '' an empty string. E.g.
		 *
		 *   # current url = '/products/1'
		 *   getClass('/products') # returns 'active'
		 *   getClass('/orders') # returns ''
		 */
		return $scope.getClass = function(id) {
			if($scope.activeNavId.substring(0, id.length) === id) {
				return 'active';
			} else {
				return '';
			}
		};
	}
]);

App.controller('LandingCtrl', ['$scope', 'locations', function($scope, locationService) {
    locationService.getAll(function(locations) {
        $scope.locations = locations;
    });
}]);
App.controller('MapCtrl', ['$scope', function($scope) {
	$scope.location = "/img/gmap.jpg";
}]);
App.controller('ModalCtrl', ['$scope', function($scope) {
	console.log('modal ctrl');
}]);
App.controller('MyCtrl', ['$scope', function($scope) {
	$scope.onePlusOne = 2;
	$scope.greeting = "Hello World";
}]);
App.controller('ReviewCtrl', ['$scope', '$stateParams', 'locations', function($scope, $stateParams, locationService) {
    if ($stateParams.locationId) {
        locationService.getLocation($stateParams.locationId, function(location) {
            $scope.location = location;
        });
    }
}]);
App.controller('ReviewMapCtrl', ['$scope', function($scope) {
	$scope.map = "/img/gmap.jpg";
	
	
	
}]);
App.controller('TodoCtrl', ['$scope', function($scope) {
	$scope.todos = [{
		text: "learn angular",
		done: true
	}, {
		text: "build an angular app",
		done: false
	}];
	$scope.addTodo = function() {
		$scope.todos.push({
			text: $scope.todoText,
			done: false
		});
		return $scope.todoText = "";
	};
	$scope.remaining = function() {
		var count;
		count = 0;
		angular.forEach($scope.todos, function(todo) {
			return count += (todo.done ? 0 : 1);
		});
		return count;
	};
	return $scope.archive = function() {
		var oldTodos;
		oldTodos = $scope.todos;
		$scope.todos = [];
		return angular.forEach(oldTodos, function(todo) {
			if(!todo.done) {
				return $scope.todos.push(todo);
			}
		});
	};
}]);
'use strict';
/* Directives*/

// register the module with Angular
App.directive('appVersion', [ // require the 'app.service' module
	'version', function(version) {
		return function(scope, elm, attrs) {
			return elm.text(version);
		};
	}
]);
'use strict';
/* Filters*/

App.filter('interpolate', [
	'version', function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}
]);
'use strict';

/* Location Sevices */

App.factory('locations', ['$http', function($http) {
    var locations;

    var service =  {
        getAll: function(callback) {
            if (locations) {
                callback(locations);
            } else {
                $http.get('/json/locations.json')
                    .success(function(data) {
                        locations = data;
                        callback(locations);
                    })
                    .error(function(data, status) {
                        console.error('Error (' + status + '):\n' + data);
                    });
            }
        },
        getLocation: function(locationId, callback) {
            service.getAll(function(locations) {
                if (locations.length) {
                    for (var i in locations) {
                        var location = locations[i].location;

                        if (location.id == locationId) {
                            callback(location);
                            break;
                        }
                    }
                }
            });
        }
    };

    return service;
}]);
'use strict';
/* Sevices*/

App.factory('version', function() {
	return "0.4.0";
});

//# sourceMappingURL=app.js.map