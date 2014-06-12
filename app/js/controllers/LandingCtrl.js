
App.controller('LandingCtrl', ['$scope', 'locations', 'geolocation', function($scope, locationService, geo) {
    /* Scope Vars */

    $scope.user = {
        coords: null,
        county: null
    };

    $scope.map = {
        center: {
            latitude: 0,
            longitude: 0
        },
        zoom: 17,
        control: {},
        markers: [],

        // see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        options: {
            disableDefaultUI: true
        }
    };

    $scope.searchterm = 'Oakland';


    /* Local Functions */

    var getUserLocation = function(success) {
        navigator.geolocation.getCurrentPosition(function(position) {
            success(position.coords);
        }, function(error) {
            console.log(error);
        });
    };

    var addUserMarker = function(coords) {
        if ($scope.user.coords) {
            $scope.map.markers.push({
                id: $scope.map.markers.length + 1,
                longitude: $scope.user.coords.longitude,
                latitude: $scope.user.coords.latitude
            });
        }
    };

    /* Observers */

    $scope.$watch('user.county', function(newValue) {
        if (newValue) {
            $scope.searchterm = newValue;
        }
    });

    $scope.$watch('searchterm', function(newValue) {
        if (newValue) {
            var newMarkers = [],
                visibleLocations;

            visibleLocations = _.filter($scope.locations, function(location) {
                return location.business.county == newValue;
            });

            for (var i in visibleLocations) {
                newMarkers.push({
                    id: visibleLocations[i].id,
                    longitude: visibleLocations[i].business.coords.longitude,
                    latitude: visibleLocations[i].business.coords.latitude
                });
            }

            // if we have a user marker (@ position [0]), then preserve it...
            // otherwise, empty the array.
            $scope.map.markers = ($scope.user.coords) ? $scope.map.markers.slice(0, 1) : [];

            // append new markers
            $scope.map.markers = $scope.map.markers.concat(newMarkers);

            $scope.map.control.refresh();
        }
    });


    /* Controller Logic */

    getUserLocation(function(coords) {
        $scope.user.coords = coords;
        $scope.map.control.refresh(coords);

        addUserMarker();

        geo.getCountyFromLatLng(coords.latitude, coords.longitude, function(county) {
            if (county) {
                $scope.user.county = county;
            }
        });
    });

    locationService.getAll(function(locations) {
        $scope.locations = locations;
    });

}]);