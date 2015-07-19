'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
}).filter('reverse', function() {
    return function(items) {
        if(items)
            return items.slice().reverse();
    };
}).filter('decode_permissions',function(){
    return function(input) {
        if(input === 0){
            return "None"
        }else if(input === 1){
            return "View"
        }else if(input === 2){
            return "Edit"
        }else if(input === 3){
            return "View/Edit"
        }
        
    };

});
