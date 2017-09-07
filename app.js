angular
    .module('myApp', ['ngRoute', 'jtt_footballdata'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'compititions.html',
                controller: 'compitionController'
            })
            .when('/league/:id', {
                templateUrl: 'league.html',
                controller: 'leagueController'
            })
            .when('/teams/:id', {
                templateUrl: 'teams.html',
                controller: 'teamsController'
            })
            .otherwise({ redirectTo: '/' });
    }])
    .directive('previewPopover', function ($compile) {
        return {
            scope: {
                items: '=newvar'
            },
            restrict: 'A',
            link: function (scope, el, attrs) {
                scope.label = attrs.popoverLabel;
                var temp = '<h4>{{items}}</h4>';
                var contents = $compile(temp)(scope);
                $(el).popover({
                    trigger: 'hover',
                    html: true,
                    content: contents,
                    placement: attrs.popoverPlacement
                });
            }
        };
    })
    .directive('tooltip', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).hover(function () {
                    // on mouseenter
                    $(element).tooltip('show');
                }, function () {
                    // on mouseleave
                    $(element).tooltip('hide');
                });
            }
        };
    })