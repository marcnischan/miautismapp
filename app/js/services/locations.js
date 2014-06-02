'use strict';

/* Location Sevices */

App.factory('locations', ['$http', function($http) {
    var locations;

    var service =  {
        getAll: function(callback) {
            $http.get('/json/locations.json')
                .success(function(data) {
                   callback(data);
                })
                .error(function(data, status) {
                    console.error('Error (' + status + '):\n' + data);
                });
        },
        getLocation: function(locationId, callback) {
            $http.get('/json/locations.json')
                .success(function(response) {
                    debugger;
                    for (var i in response) {
                        var location = response[i].location;

                        if (location.id == locationId) {
                            callback(location);
                            break;
                        }
                    }
                })
                .error(function(data, status) {
                    console.error('Error (' + status + '):\n' + data);
                });
        }
    };

    return service;
}]);