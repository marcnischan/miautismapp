
App.controller('reviewsDB', ['$scope', function($scope) {
	
$scope.locations = 
    [                      
        { location: {
                reviwer: {
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
            },
            { location: {
                reviwer: {
                    firstname: "Ben",
                    lastname: "D",
                    email: "benjduff@gmail.com"
                },
                business: {
                    category: "Restaurant",
                    name: "Olga's",
                    town: "Auburn Hills",
                    county: "Oakland",
                    rating: {
                        overall: "4",
                        sights: "3",
                        sounds: "3",
                        friendliness: "4"
                    },
                    comments: "Good experience overall.  Nice place in Great Lakes Crossing to get a bite to eat and relax. "
                    }
                }
            },
            { location: {
                reviwer: {
                    firstname: "Ben",
                    lastname: "D",
                    email: "benjduff@gmail.com"
                },
                business: {
                    category: "Place of recreation",
                    name: "Outdoor World Bass Pro Shop",
                    town: "Auburn Hills",
                    county: "Oakland",
                    rating: {
                        overall: "4",
                        sights: "3",
                        sounds: "3",
                        friendliness: "4"
                    },
                    comments: "My son loves to look at the fish tanks here.  Also the staff is very accommodating.  " 
                    },    
                }
            },
            { location: {
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
                comments: "I can't believe it's not Butter!! Such cuts! Most enjoyment barber!" 
                }  
            }
        },
        { location: {
                reviewer: {
                    firstname: "Johnny",
                    lastname: "B",
                    email: "dsvsdsdren@hotmail.com"
                },
                business: {
                    category: "Buddhist temple",
                    name: "Rama lama ding dong",
                    town: "North Pole",
                    county: "Funkytown",
                    rating: {
                        overall: "4",
                        sights: "3",
                        sounds: "5",
                        friendliness: "4"
                    },
                    comments: "OMG the lolz!! Internet is the best! Such pixel expressions!" 
                }  
            }
        }
    ]
}]);
