angular.module('myApp')
    .controller('compitionController', ['$scope', '$http', 'footballdataFactory', function ($scope, $http, footballdataFactory) {
        $scope.league = "Click here to get league "
        getLeagueTableBySeason();
        function getLeagueTableBySeason() {
            footballdataFactory.getCompitions({
                apiKey: '2ac17f355da94c879749226663dad0a4', // Register for a free api key: http://api.football-data.org/register
            }).then(function (_data) {
                $scope.compititions = _data.data;
                console.log("frt" + angular.toJson($scope.compititions))
            }).catch(function (_data) {
                //on error
            });
        }
    }])
