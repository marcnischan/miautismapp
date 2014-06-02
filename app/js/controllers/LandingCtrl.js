App.controller('LandingCtrl', ['$scope', 'locations', function($scope, locationService) {
    locationService.getLocations(function(locations) {
        $scope.locations = locations;
    });
}]);