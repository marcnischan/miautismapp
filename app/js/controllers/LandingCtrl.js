
App.controller('LandingCtrl', ['$scope', 'locations', 'geolocation', function($scope, locationService, geo) {
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
            latitude: 0,
            longitude: 0
        },
        zoom: 17,
        control: {},
        // see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        options: {
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
            icon: 'https://www.google.com/support/enterprise/static/geo/cdate/art/icons/user_marker_32.png'
        },
    };

    $scope.searchterm = 'Oakland';


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

            $scope.map.markers = newMarkers;

            $scope.map.control.refresh();
        }
    });


    /* Controller Logic */

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
        console.log(error);
    });

    locationService.getAll(function(locations) {
        $scope.locations = locations;
    });
    
    var rating = business.rating.overall;
        rating = parseInt(rating);
        
    for( var i = 0; i < rating; i++ ){
            $('.star').eq(i).addClass('show-star');
    }
    
}]);