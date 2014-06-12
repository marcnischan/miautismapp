
App.controller('LandingCtrl', ['$scope', 'locations', function($scope, locationService) {
    $scope.map = {
        center: {
            latitude: 0,
            longitude: 0
        },
        zoom: 10,
        control: {},
        markers: []
    };

    $scope.searchterm = "Oakland";

    navigator.geolocation.getCurrentPosition(function(position) {
        $scope.map.control.refresh(position.coords);
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