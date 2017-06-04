(function () {
    'use strict';
    angular
        .module('app')
        .factory('RegistrationService',RegistrationService);

    RegistrationService.$inject = ['$http'];
    function RegistrationService($http) {
    	var service={};

    	service.createUser=function(user,callback)
    	{
    		// Dumy url using Mocky
    		$http.get("http://www.mocky.io/v2/593229910f00005b0f5bfbe8").then(function(resp){
    		 	console.log(resp.data);
                //after sucessful response.
                callback(resp.data.submit);
    		},function(){alert("!Opps Something wrong");});
    		
    	}

    	return service;
    }

 })();