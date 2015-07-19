'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http,DataForApp) {
    DataForApp.get_doctor_with_assistants().then(function(data){
        console.log(data);
        $scope.name = data.data.name;
    
    });
    

  }).
  controller('Home', function ($scope,$http,DataForApp) {
    $scope.number = 6;
    $scope.check = 0;
    $scope.show_tab = 0;
    $scope.number_of_assitants = 0;
    $scope.getNumber = function(num) {
        console.log(num);
        return new Array(num);   
    };
    $scope.change_tab = function(num){
        $scope.show_tab = num;
    }
    // for selecting number of assistants to add
    $scope.select_number = function(num){
        $scope.number_of_assitants = num;
        $scope.total_input = num;
        var str = name;
        var names_array = [];
//        console.log(DataForApp.doctor_id());
        for(var i=0;i<num;i++){
            var name_obj = {'name':"",
                            'calendar':{'view':'',
                                        'edit':''
                                       },
                            'practice_location':{'view':'',
                                        'edit':''
                                       },
                            'DoctorId':DataForApp.current_doctor_id()
                           };    
            names_array.push(name_obj);
        }
        $scope.assisData = {};
        $scope.assisData.assistants = names_array;
        
    };
    
    $scope.range = function(min, max, step){
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) input.push(i);
        return input;
    };
    $scope.save_assistants = function(){
        console.log($scope.assisData);
        var assistants = []
        assistants = angular.copy($scope.assisData.assistants);
        for(var i=0;i<assistants.length;i++){
            assistants[i].calendar = $scope.manipulate_permission(assistants[i].calendar);                  assistants[i].practice_location=$scope.manipulate_permission(assistants[i].practice_location);    
            
        }
        console.log($scope.assisData.assistants);
        console.log(assistants);
        DataForApp.save_assistants(assistants).then(function(data){
            if(data.status === 200){
                angular.element('#permissionModal').modal('hide');
                $scope.number_of_assitants = 0;
                $scope.total_input = 0;
                $scope.assisData = {};
                $scope.check_for_assistants();
            
            }else{
                $scope.status = "Error";
                console.log($scope.status);
                
            }
        });

    };
    $scope.manipulate_permission = function(permission){
        if(permission.edit==='' && permission.view===''){
            return 0
        }else if(permission.edit === '' && permission.view === true){
            return 1
        }else if(permission.edit === true && permission.view === ''){
            return 2
        }else if(permission.edit === true && permission.view === true){
            return 3
        }
            
    };
    $scope.check_for_assistants = function(){
        DataForApp.get_doctor_with_assistants().then(function(data){
            console.log('checking assistants');
            console.log(data);
            $scope.assistants = data.data.Assistants;
            

        });
    };
    

  });
