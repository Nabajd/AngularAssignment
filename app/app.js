
var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


         $routeProvider.when("/newAccount", {        
             controller: "newAccountController",
             templateUrl: "app/views/new_account.html" 
                    
        })
            .when("/viewDetails", {       
             controller: "viewDetailsCtrl",
             templateUrl: "app/views/viewDetails.html"
             })
            
            .otherwise({ redirectTo: '/newAccount' });
        
        }]);

