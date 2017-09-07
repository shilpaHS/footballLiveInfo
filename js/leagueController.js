angular.module('myApp')
    .controller('leagueController', ['$scope', '$http', '$routeParams', 'footballdataFactory', function ($scope, $http, $routeParams, footballdataFactory) {
        var id = $routeParams.id;
        getLeague(id)
        $scope.an="shilpa"
        function getLeague(id) {
                        footballdataFactory.getLeagueCompitions({
                            apiKey: '2ac17f355da94c879749226663dad0a4',
                            id:id, // Register for a free api key: http://api.football-data.org/register
                        }).then(function (_data) {
                            $scope.league = _data.data.standing;
                            console.log(" $scope.league"+angular.toJson($scope.league))
                        }).catch(function (_data) {
                            //on error
                        });

                    }
    }])