appCtrl.controller('gonggaoController',['$scope','gonggaoService',function($scope,gonggaoService){
  var vm=$scope;
  vm.xiaoxi=gonggaoService.loadItem();
  console.log(vm.xiaoxi.length);
}])
