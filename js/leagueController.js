angular.module('myApp')
    .controller('leagueController', ['$scope', '$http', '$routeParams', 'footballdataFactory', function ($scope, $http, $routeParams, footballdataFactory) {
        $scope.id = $routeParams.id;
        var id = $routeParams.id;
        getLeague(id)
        function getLeague(id) {
            footballdataFactory.getLeagueCompitions({
                apiKey: '2ac17f355da94c879749226663dad0a4',
                id: id, // Register for a free api key: http://api.football-data.org/register
            }).then(function (_data) {
                $scope.league = _data.data.standing;
                for (var i in $scope.league) {
                    var s = $scope.league[i]._links.team.href;
                    var final = s.substr(s.lastIndexOf('/') + 1);
                    $scope.league[i].teamId=final;
                }
                console.log("po" + angular.toJson($scope.league))
            }).catch(function (_data) {
                //on error
            });
        }
    }])