App.controller('ReviewCtrl', ['$scope', '$stateParams', 'locations', function($scope, $stateParams, locationService) {

    if ($stateParams.locationId) {
        locationService.getLocation($stateParams, $stateParams.locationId, function(review, location) {
            $scope.location = location;
            $scope.business = business;
            console.log('i hope this says ' + location.id);
        });
    }
}]);