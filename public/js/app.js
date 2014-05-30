'use strict';

// Declare app level module which depends on filters, and services
var App = angular.module('app', ['ngSanitize', 'ngResource', 'ui.router', 'oc.modal']).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
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
		url: "/review", 
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
}]);
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
])
;App.controller('LandingCtrl', ['$scope', function($scope) {
$scope.locations = 
    [                      
        { location: {
        reviewer: {
            firstname: "Renee",
            lastname: "B",
            email: "rlboogren@hotmail.com"
        },
        business: {
            category: "Barbershop/hair salon",
            name: "Great Clips",
            town: "Clawson",
            county: "Oakland",
            rating: {
                overall: "4",
                sights: "3",
                sounds: "5",
                friendliness: "4"
            },
            comments: "My son is a little nervous when it comes to getting his haircut.  He is very motivated by suckers and the staff at Great Clips are so nice to him and cut his hair quickly and let him pick suckers when he is finished."
            }
        }
    },
    { location: {
        reviewer: {
            firstname: "Ben",
            lastname: "D",
            email: "benjduff@gmail.com"
        },
        business: {
            category: "Restaurant",
            name: "Olga's",
            town: "Auburn Hills",
            county: "Oakland",
            rating: {
                overall: "4",
                sights: "3",
                sounds: "3",
                friendliness: "4"
            },
            comments: "Good experience overall.  Nice place in Great Lakes Crossing to get a bite to eat and relax. "
            }
        }
    },
    { location: {
        reviewer: {
            firstname: "Ben",
            lastname: "D",
            email: "benjduff@gmail.com"
        },
        business: {
            category: "Place of recreation",
            name: "Outdoor World Bass Pro Shop",
            town: "Auburn Hills",
            county: "Oakland",
            rating: {
                overall: "4",
                sights: "3",
                sounds: "3",
                friendliness: "4"
            },
            comments: "My son loves to look at the fish tanks here.  Also the staff is very accommodating.  " 
            },    
        }
    },
    { location: {
        reviewer: {
            firstname: "Renee",
            lastname: "B",
            email: "rlboogren@hotmail.com"
        },
        business: {
            category: "Barbershop/hair salon",
            name: "Great Clips",
            town: "Clawson",
            county: "Oakland",
            rating: {
                overall: "4",
                sights: "3",
                sounds: "5",
                friendliness: "4"
            },
            comments: "I can't believe it's not Butter!! Such cuts! Most enjoyment barber!" 
            }  
        }
    },
    { location: {
        reviewer: {
            firstname: "Johnny",
            lastname: "B",
            email: "dsvsdsdren@hotmail.com"
        },
        business: {
            category: "Buddhist temple",
            name: "Rama lama ding dong",
            town: "North Pole",
            county: "Funkytown",
            rating: {
                overall: "4",
                sights: "3",
                sounds: "5",
                friendliness: "4"
            },
            comments: "OMG the lolz!! Internet is the best! Such pixel expressions!" 
        }  
        }
    },
    { location: {
        reviewer: {
            firstname: "Kelsey",
            lastname: "H",
            email: "kelsey.hilbers@detroitlabs.com"
        },
        business: {
            category: "Restaurant",
            name: "Halo Burger",
            town: "Flint",
            county: "Genesee",
            rating: {
                overall: "4",
                sights: "3",
                sounds: "3",
                friendliness: "4"
            },
            comments: "Good experience overall.  Nice place when it’s not too busy. Lots of customizable food options. "
            }
        }
    },
    { location: {
        reviewer: {
            firstname: "Kelsi",
            lastname: "H",
            email: "kelsey.hilbers@detroitlabs.com"
        },
        business: {
            category: "Restaurant",
            name: "Blind Fish",
            town: "Lapeer",
            county: "Lapeer",
            rating: {
                overall: "2",
                sights: "5",
                sounds: "3",
                friendliness: "1"
            },
            comments: "Crowded and loud, not a good experience. "
            }
        }
    },
    { location: {
        reviewer: {
            firstname: "Kelso",
            lastname: "H",
            email: "kelsey.hilbers@detroitlabs.com"
        },
        business: {
            category: "Place of recreation",
            name: "Riverside Park",
            town: "Adrian",
            county: "Lenawee",
            rating: {
                overall: "4",
                sights: "2",
                sounds: "3",
                friendliness: "3"
            },
            comments: "A nice park. "
            }
        }
    },
    { location: {
        reviewer: {
            firstname: "Kelso",
            lastname: "H",
            email: "kelsey.hilbers@detroitlabs.com"
        },
        business: {
            category: "Place of recreation",
            name: "Family Impact Center",
            town: "Fowlerville",
            county: "Livingston",
            rating: {
                overall: "4",
                sights: "2",
                sounds: "5",
                friendliness: "4"
            },
            comments: "Great non-profit. "
            }
        }
    },
    { location: {
        reviewer: {
            firstname: "Kelso",
            lastname: "H",
            email: "kelsey.hilbers@detroitlabs.com"
        },
        business: {
            category: "Place of recreation",
            name: "Four Bears Water Park",
            town: "Shelby Township",
            county: "Macomb",
            rating: {
                overall: "3",
                sights: "2",
                sounds: "3",
                friendliness: "3"
            },
            comments: "A nice park when its not too busy and staff isn’t overwhelmed. "
            }
        }
    },
    { location: {
        reviewer: {
            firstname: "Kelso",
            lastname: "H",
            email: "kelsey.hilbers@detroitlabs.com"
        },
        business: {
            category: "Babershop/hair salon",
            name: "European Touch",
            town: "Saint Clair",
            county: "Saint Clair",
            rating: {
                overall: "2",
                sights: "2",
                sounds: "1",
                friendliness: "3"
            },
            comments: "The staff was nice but it was too loud and rowdy. "
            }
        }
    },
    { location: {
        reviewer: {
            firstname: "Kelso",
            lastname: "H",
            email: "kelsey.hilbers@detroitlabs.com"
        },
        business: {
            category: "Place of recreation",
            name: "Farmer’s Market",
            town: "Ann Arbor",
            county: "Washtenaw",
            rating: {
                overall: "4",
                sights: "4",
                sounds: "3",
                friendliness: "5"
            },
            comments: "A nice walk when its not too busy, the vendors are all friendly and most give out free samples. People here tend to be pretty good about letting kids be hands on with their wares. "
            }
        }
    },
    { location: {
        reviewer: {
            firstname: "Kelso",
            lastname: "H",
            email: "kelsey.hilbers@detroitlabs.com"
        },
        business: {
            category: "Place of recreation",
            name: "The Rink at Campus Martius",
            town: "Detroit",
            county: "Wayne",
            rating: {
                overall: "3",
                sights: "2",
                sounds: "3",
                friendliness: "3"
            },
            comments: "A nice park when its not too busy and staff isn’t overwhelmed. "
            }
        }
    }
    ]
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
App.controller('ReviewCtrl', ['$scope', function($scope) {
$scope.locations = [{
 
        location: {
            reviewer: {
                firstname: "Renee",
                lastname: "B",
                email: "rlboogren@hotmail.com"
            },
            business: {
                category: "Barbershop/hair salon",
                name: "Great Clips",
                town: "Clawson",
                county: "Oakland",
                rating: {
                    overall: "4",
                    sights: "3",
                    sounds: "5",
                    friendliness: "4"
                },
                comments: "My son is a little nervous when it comes to getting his haircut.  He is very motivated by suckers and the staff at Great Clips are so nice to him and cut his hair quickly and let him pick suckers when he is finished."
                }
         }
      }]
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
/* Sevices*/

App.factory('version', function() {
	return "0.4.0";
});

//# sourceMappingURL=app.js.map