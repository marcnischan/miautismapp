App.controller('ReviewCtrl', ['$scope', '$stateParams', 'locations', function($scope, $stateParams, locationService) {
    if ($stateParams.locationId) {
        $scope.map = {
            center: {
                latitude: 0,
                longitude: 0
            }
        };

        locationService.getLocation($stateParams.locationId, function(location) {
            var business = location.business;

            $scope.business = business;
            $scope.reviewer = location.reviewer;

            if (business.coords) {
                $scope.map.center = business.coords;
            };
            
            $scope.rating = business.rating.overall;
            var rating = $scope.rating;
            
            var addStar = function(rating){
                rating = parseInt(rating);
                
                for( var i = 0; i < rating; i++ ){
                    $('.star').eq(i).addClass('show-star');
                }                
            };
            
            addStar(rating);
            

            
        });
    }
}]);

