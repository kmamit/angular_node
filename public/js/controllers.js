'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('Home', function ($scope) {
    $scope.number = 5;
    $scope.check = 0;
    $scope.number_of_assitants = 0;
    $scope.getNumber = function(num) {
        console.log(num);
        return new Array(num);   
    };
    // for selecting number of assistants to add
    $scope.select_number = function(num){
        $scope.number_of_assitants = num;
        $scope.total_input = num;
        var str = name;
        var names_array = [];
        
        for(var i=0;i<num;i++){
            var name_obj = {'ass_name':""};    
            names_array.push(name_obj);
        }
        $scope.formData = {};
        $scope.formData.users = names_array;
        console.log($scope.formData.users);
    };
    
    $scope.range = function(min, max, step){
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) input.push(i);
        return input;
    };

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
