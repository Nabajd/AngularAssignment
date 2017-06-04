app.controller('indexCtrl', ['$scope', '$location',function ($scope, $location) {
$scope.isInRegPage=true;
$scope.change=function(){
	$scope.isInRegPage= !$scope.isInRegPage;
}
}]);