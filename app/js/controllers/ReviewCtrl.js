App.controller('ReviewCtrl', ['$scope', '$stateParams', 'locations', function($scope, $stateParams, locationService) {


    if ($stateParams.locationId) {
        locationService.getLocation($stateParams.locationId, function(location) {
            $scope.business = location.business;
            $scope.reviewer = location.reviewer;

        });
    }
}]);

