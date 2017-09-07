angular.module('myApp')
    .controller('teamsController', ['$scope', '$http', '$routeParams', 'footballdataFactory', function ($scope, $http, $routeParams, footballdataFactory) {
        var id = $routeParams.id;
        getTeams(id)
        function getTeams(id) {
                        footballdataFactory.getPlayersByTeam({
                            apiKey: '2ac17f355da94c879749226663dad0a4',
                            id:id, 
                        }).then(function (_data) {
                            $scope.players = _data.data.players;
                        }).catch(function (_data) {
                            //on error
                        });

                    }
    }])