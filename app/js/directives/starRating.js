'use strict';

/* Star Rating Directive */

// register the module with Angular
App.directive('starRating', [function() {
    return {
        restrict: 'E',
        scope: {
            score: '='
        },
        templateUrl: 'partials/star-rating.html',
        link: function(scope, element, attrs) {
            scope.$watch('score', function(score) {
                if (scope.score) {
                    var stars = element.children();

                    for (var i in stars) {
                        if (i < scope.score) {
                            $(stars[i]).css({ display: 'inline-block' });
                        }
                    }
                }
            });
        }
    };
}]);