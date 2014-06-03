App.controller('ReviewCtrl', ['$scope', '$stateParams', 'locations', function($scope, $stateParams, locationService) {
    
//    locationService.getAll(function(locations) {
//        $scope.locations = locations;
//    });
    
    if ($stateParams.locationId) {
        locationService.getLocation($stateParams.locationId, function(location) {
            $scope.location = location;
        });
    }
}]);

