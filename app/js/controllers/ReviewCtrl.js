App.controller('ReviewCtrl', ['$scope', '$stateParams', 'locations', function($scope, $stateParams, locationService) {
    if ($stateParams.locationId) {
        locationService.getLocation($stateParams.locationId, function(location) {
            $scope.location = location;
        });
    }
}]);