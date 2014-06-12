App.controller('MapCtrl', ['$scope', function($scope) {
    $scope.map = {
        center: {
            latitude: 0,
            longitude: 0
        },
        zoom: 12,
        control: {}
    };

    navigator.geolocation.getCurrentPosition(function(position) {
        $scope.map.control.refresh(position.coords);
    }, function(error) {
        console.log(error);
    });
}]);