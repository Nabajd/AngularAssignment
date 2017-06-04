app.controller('viewDetailsCtrl', ['$scope', '$location',function ($scope, $location) {


    $scope.sortType     = 'name'; 
    $scope.sortReverse  = false;  
    $scope.searchName   = '';
    $scope.selected = {};   
    //$scope.editFlag = false;  
  
 
    $scope.employeeList=[
    {id:1,name:'NabaJyoti',address:'Bellandur',emp_no:1023},
    {id:2,name:'Jhon',address:'Kolkata',emp_no:1008},
    {id:3,name:'Mark',address:'Guwahati',emp_no:1001},
    {id:4,name:'Bob',address:'Delhi',emp_no:1027},
    {id:5,name:'Ross',address:'Mumbai',emp_no:3023},
    {id:6,name:'Pitter',address:'Pune',emp_no:2045}
    ];

    // function for returning a ng-template id for the table
    $scope.getTemplate = function (employee) {
    if (employee.id === $scope.selected.id){
    return 'edit';
    }
    else return 'display';
    };
    
    //function call edit button onClick.  
    $scope.editEmployee = function (employee) {
    
    //$scope.sortType=null;
    $scope.selected = employee;
    };

    //function for reset the seleted object
    $scope.reset = function () {
    $scope.selected = {};
    
    };
    
    //function call on save button onClick.To update the employeeList Object.
    $scope.updateEmployee = function () {
        angular.forEach($scope.employeeList, function(value, key) {
        if($scope.selected.id===value.id){
            value=$scope.selected;
            $scope.reset();
            //console.log($scope.employeeList);
        }
        });
    };


}]);
