App.controller('ReviewMapCtrl', ['$scope', function($scope) {

    $scope.map = {
        center: {
            latitude: 42.335243, 
            longitude: -83.049640
        },
        zoom: 16,
        zoomControl: false,
        scaleControl: false
    };	
	
}]);