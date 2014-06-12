
App.controller('LandingCtrl', ['$scope', 'locations', 'geolocation', function($scope, locationService, geo) {
    $scope.user = {
        coords: {},
        county: null
    };

    $scope.map = {
        center: {
            latitude: 0,
            longitude: 0
        },
        zoom: 16,
        control: {},
        markers: []
    };

    $scope.searchterm = 'Oakland';

    $scope.$watch('user.county', function(newValue, oldValue, scope) {
        if (newValue) {
            $scope.searchterm = newValue;
        }
    });

    navigator.geolocation.getCurrentPosition(function(position) {
        var coords = position.coords;

        $scope.map.control.refresh(coords);

        $scope.map.markers.push({
            id: $scope.map.markers.length + 1,
            longitude: coords.longitude,
            latitude: coords.latitude
        });

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

        for (var i in locations) {
            var business = locations[i].business;

            if (business.hasOwnProperty('coords')) {
                $scope.map.markers.push({
                    id: locations[i].id,
                    latitude: business.coords.latitude,
                    longitude: business.coords.longitude
                });
            }
        }
    });

}]);