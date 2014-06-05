'use strict';

/* Counties Service */

App.factory('counties', ['$http', function(){
    
    var counties = [];
    
    getCounties(){
        if(counties.length = 0){
            
            getAll( function(locations) {    
                for( var i in locations ){
                    var county = locations.[i].business.county; 
                }
                if( county ! in counties ){
                    counties.push(county);
                };
            });           
         }
    };
    counties.sort();
    return counties;
}]);