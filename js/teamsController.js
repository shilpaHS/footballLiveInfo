angular.module('myApp')
    .controller('teamsController', ['$scope', '$http', '$routeParams', 'footballdataFactory', function ($scope, $http, $routeParams, footballdataFactory) {
        var id = $routeParams.id;
        getTeams(id)
        getFixtures(id)
        function getTeams(id) {
            footballdataFactory.getPlayersByTeam({
                apiKey: '2ac17f355da94c879749226663dad0a4',
                id: id,
            }).then(function (_data) {
                $scope.players = _data.data.players;
            }).catch(function (_data) {
                //on error
            });
        }
        function getFixtures(id) {
            footballdataFactory.getFixturesByTeam({
                apiKey: '2ac17f355da94c879749226663dad0a4',
                id: id,
            }).then(function (_data) {
                $scope.fixtures = _data.data.fixtures;
                for (var i in $scope.fixtures) {
                    var today = new Date();
                    var matchDay = new Date($scope.fixtures[i].date);
                    var diffMs = (matchDay - today); // milliseconds between now & matchday
                    var diffDays = Math.floor(diffMs / 86400000); // days
                    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
                    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
                    $scope.fixtures[i].duration =diffDays+' Days '+ diffHrs + ' Hours ' + diffMins +' mins '
                }
            }).catch(function (_data) {
                //on error
            });

        }
    }])