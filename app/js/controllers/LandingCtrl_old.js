
App.controller('LandingCtrl', ['$scope', 'locations', function($scope, locationService) {
    locationService.getAll(function(locations) {
        $scope.locations = locations;
    });

}]);