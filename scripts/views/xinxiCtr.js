

appCtrl.controller('xinxiController',['$scope','xinxiService',function($scope,xinxiService){
  var vm=$scope;
  vm.person=xinxiService.loadItem();
  console.log(vm.person.length);
}])
