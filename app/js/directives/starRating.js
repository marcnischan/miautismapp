'use strict';

/* Star Rating Directive */

App.directive('starRating', [function() {
    return {
        restrict: 'E',
        scope: {
            score: '='
        },
        templateUrl: 'partials/star-rating.html',
        link: function(scope, element, attrs) {
            scope.$watch('score', function(score) {
                if (score) {
                    var stars = element.children();

                    for (var i in stars) {
                        if (i < score) {
                            $(stars[i]).bind('load', function() {
                                var starPath = this.contentDocument.getElementById('star-path');
                                starPath.setAttribute('class', 'filled')
                            });
                        }
                    }
                }
            });
        }
    };
}]);