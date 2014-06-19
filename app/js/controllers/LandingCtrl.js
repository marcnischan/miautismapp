
App.controller('LandingCtrl', ['$scope', 'locations', 'geolocation', function($scope, locationService, geo) {
    /* Local Vars */

    var defaultCounty = 'Oakland';


    /* Scope Vars */

    $scope.user = {
        county: null,
        coords: {
            latitude: 0,
            longitude: 0
        }
    };

    $scope.map = {
        center: {
            latitude: 42.659913,
            longitude: -83.3864152
        },
        zoom: 8,
        control: {},
        // see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        options: {
            backgroundColor: '#f4f1ef',
            disableDefaultUI: true,
            mapTypeControl: false,
            overviewMapControl: false,
            panControl: false,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: true,
            maxZoom: 15
        },
        events: {},
        markers: [],
        markerOptions: {},
        userMarkerOptions: {
            visible: false,
            icon: 'https://www.google.com/support/enterprise/static/geo/cdate/art/icons/user_marker_32.png'
        }
    };

    $scope.searchterm = defaultCounty;


    /* Observers */

    $scope.$watch('user.coords', function(newValue) {
        if (newValue) {
            $scope.map.userMarkerOptions.visible = true;
        }
    });

    $scope.$watch('user.county', function(newValue) {
        if (newValue) {
            $scope.searchterm = newValue;
        }
    });

    $scope.$watch('searchterm', function(newValue) {
        if (newValue) {
            placeMarkersForCounty(newValue);
        }
    });


    /* Controller Logic */

    var placeMarkersForCounty = function(countyName) {
        var newMarkers = [],
            visibleLocations;

        visibleLocations = _.filter($scope.locations, function(location) {
            return location.business.county == countyName;
        });

        for (var i in visibleLocations) {
            newMarkers.push({
                id: visibleLocations[i].id,
                longitude: visibleLocations[i].business.coords.longitude,
                latitude: visibleLocations[i].business.coords.latitude
            });
        }

        $scope.map.markers = newMarkers;

        $scope.map.control.refresh();
    };

    locationService.getAll(function(locations) {
        $scope.locations = locations;

        navigator.geolocation.getCurrentPosition(function(position) {
            var coords = position.coords;

            $scope.user.coords = coords;
            $scope.map.control.refresh(coords);

            geo.getCountyFromLatLng(coords.latitude, coords.longitude, function(county) {
                if (county) {
                    $scope.user.county = county;
                }
            });
        }, function(error) {
            placeMarkersForCounty(defaultCounty);
        });
    });
}]);