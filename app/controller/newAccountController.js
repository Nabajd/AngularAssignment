'use strict';
app.controller('newAccountController', ['$scope', '$location','RegistrationService',function ($scope, $location,RegistrationService) {

  
  $scope.state = "";
  
  //function call on submit the form
  $scope.addUser = function(){
    //call RegistrationService method for Api call
  	RegistrationService.createUser($scope.user, function(response){
  		if(response==='success')
  		{
  			alert("Form Submit Successfully");
  			$scope.reg_form.$setPristine();
  			$scope.reg_form.$setUntouched()
  			$scope.user={};
  		}
  	});
  }
  $scope.stateList = [
   { "name": "Andhra Pradesh" },
   { "name": "Arunachal Pradesh" },
   { "name": "Assam" },
   { "name": "Bihar" },
   { "name": "Chhattisgarh" },
   { "name": "Chandigarh" },
   { "name": "Dadra and Nagar Haveli" },
   { "name": "Daman and Diu" },
   { "name": "Delhi" },
   { "name": "Goa" },
   { "name": "Gujarat" },
   { "name": "Haryana" },
   { "name": "Himachal Pradesh" },
   { "name": "Jammu and Kashmir" },
   { "name": "Jharkhand" },
   { "name": "Karnataka" },
   { "name": "Kerala" },
   { "name": "Madhya Pradesh" }];

 }]);