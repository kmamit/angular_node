'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .service('DataForApp',['$http', function($http){
        var doctor = '';
        this.get_doctor_with_assistants = function() { 
            console.log('i am here');
            var promise = $http({
                                method: 'GET',
                                url: '/api/doctor'
                            }).
                            success(function (data, status, headers, config) {
                                console.log(data);
                                doctor = data;
                                return doctor;

                            }).
                            error(function (data, status, headers, config) {
                                return 'Error!';
                            });
            return promise;
        };
        this.current_doctor_id = function() { 
            return doctor.id;
        };
        this.save_assistants = function(data){
            var promise =         $http({
                                        method: 'POST',
                                        url: '/api/create/assitants/batch',
                                        data:data
                                    }).
                                    success(function (data, status, headers, config) {
                                       return 'Success';
                                    }).
                                    error(function (data, status, headers, config) {
                                        return 'Error';
                                    });
            return promise;
        };

    }]);
