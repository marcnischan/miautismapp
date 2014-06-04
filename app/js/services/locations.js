'use strict';

/* Location Sevices */

App.factory('locations', ['$http', function($http) {
    var locations;

    var service =  {
        getAll: function(callback) {
            if (locations) {
                callback(locations);
            } else {
                $http.get('/json/locations.json')
                    .success(function(data) {
                        locations = data;
                        callback(locations);
                    })
                    .error(function(data, status) {
                        console.error('Error (' + status + '):\n' + data);
                    });
            }
        },
        getLocation: function(locationId, callback) {
            service.getAll(function(locations) {
                if (locations.length) {
                    for (var i in locations) {
                        var location = locations[i];

                        if (location.id == locationId) {
                            callback(location);
                            break;
                        }
                    }
                }
            });
        }
    };

    return service;
}]);