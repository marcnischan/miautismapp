App.controller('MapCtrl', ['$scope', function($scope) {  
	   $scope.location = "/img/gmap.jpg";
	   $scope.testblurb = "Hello world!";
	   $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
}]);