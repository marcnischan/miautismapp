'use strict';

/* GeoLocation Sevices */

App.factory('geolocation', ['$http', function($http) {
    var apiKey = 'AIzaSyD7p3HQ5XJ_qVeYCfWO8ytt72ioJCMLP6Q';

    var service =  {
        getCountyFromLatLng: function(latitude, longitude, callback) {
            $http.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    result_type: 'administrative_area_level_2',
                    latlng: latitude + ',' + longitude,
                    key: apiKey
                }
            })
            .success(function(data) {
                if (data && 'results' in data && data.results.length) {
                    var county;

                    var result = data.results[0];

                    if ('address_components' in result && result.address_components.length) {
                        var component = result.address_components[0];

                        if ('long_name' in component && component.long_name.match(/ County/)) {
                            county = component.long_name.replace(/ County/, '');
                        }
                    }

                    callback(county);
                }
            })
            .error(function(data, status) {
                console.error('Error (' + status + '):\n' + data);
            });
        }
    };

    return service;
}]);