App.controller('ReviewCtrl', ['$scope', function($scope) {
$scope.locations = [{
 
        location: {
            reviewer: {
                firstname: "Renee",
                lastname: "B",
                email: "rlboogren@hotmail.com"
            },
            business: {
                category: "Barbershop/hair salon",
                name: "Great Clips",
                town: "Clawson",
                county: "Oakland",
                rating: {
                    overall: "4",
                    sights: "3",
                    sounds: "5",
                    friendliness: "4"
                },
                comments: "My son is a little nervous when it comes to getting his haircut.  He is very motivated by suckers and the staff at Great Clips are so nice to him and cut his hair quickly and let him pick suckers when he is finished."
                }
         }
      }]
}]);