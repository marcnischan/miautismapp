'use strict';

/* Location Sevices */

App.factory('locations', ['$http', function($http) {
    return {
        getLocations: function(callback) {
            $http.get('/json/locations.json')
                .success(function(data) {
                   callback(data);
                })
                .error(function(data, status) {
                    console.error('Error (' + status + '):\n' + data);
                });
        }
    };
}]);