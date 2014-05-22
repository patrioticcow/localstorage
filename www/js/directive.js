angular.module('starter.directive', [])
    .directive('addthisToolbox', function () {
        return {
            restrict: 'A',
            transclude: true,
            replace: true,
            template: '<div ng-transclude></div>',
            link: function ($scope, element, attrs) {
                addthis.init();
                addthis.toolbox(element);
            }
        }
    });