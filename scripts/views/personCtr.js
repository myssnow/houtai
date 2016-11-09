appCtrl.controller('xinxiCtroller',['$scope','personServer',function($scope,personServer){
  var vm=$scope;
  vm.person=personServer.person;
}])
