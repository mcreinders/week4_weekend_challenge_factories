/**
 * Created by user on 1/15/16.
 */

var app = angular.module('githubApp', []);

app.controller('MyController', ['$scope', 'GithubService', function($scope, GithubService){
    $scope.data = GithubService.data;
    GithubService.makeCall();
}]);

app.factory('GithubService', ['$http', function($http){

    //object to hold data returned from github
    var data = {};
    var gitHubUsername = 'mcreinders';

    //gets JSON data from github
    var makeCall = function(){
        $http.jsonp('https://api.github.com/users/' + gitHubUsername + '/events?callback=JSON_CALLBACK').then(function(response){
            data.results = response.data;
        })
    };
    return {
        makeCall: makeCall,
        data: data
    }
}]);

////code that I used to just test the get from github///////////////
//$scope.testGet = function(){
//
//    var gitHubUsername = 'mcreinders';
//
//    $http.jsonp('https://api.github.com/users/' + gitHubUsername + '/events?callback=JSON_CALLBACK').then(function (response) {
//        console.log(response);
//    })
//}