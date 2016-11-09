var myApp=angular.module('myApp',['ui.router','app-service','app-ctrl']);


myApp.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
});
myApp.config(['$stateProvider',function($stateProvider){
  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'/tpls/home.html'
    // controller:'homeController',
    // controllerAs:'homeCtrl'
  })
  .state('home.xingzheng',{
    url:'/xingzheng',
    templateUrl:'/tpls/xingzheng.html',
    controller:'xingzhengController'
  })
  .state('home.xitong',{
    url:'/xitong',
    templateUrl:'/tpls/xitong.html',
    controller:'xitongController'
  })
  .state('home.xingzheng.xinxi',{
    params:{'name':null},
    url:'/xinxi',
    templateUrl:'/tpls/xinxi.html',
    controller:'xinxiController'
  })
  .state('home.xitong.gonggao',{
    url:'/gonggao',
    templateUrl:'/tpls/gonggao.html',
    controller:'gonggaoController'
  })
}]);
myApp.controller('xingzhengController',['$scope','$state',function($scope,$state){
  var vm=$scope;
  vm.name='';
  vm.sex='';
  vm.zhiwei='';
  vm.phone='';
  vm.bumen='';
  vm.zhuangtai='';
  vm.add=function(){
    var person={
      gonghao:'',
      name:'',
      zhiwei:'',
      phone:'',
      bumen:'',
      ruzhi:'',
      zhuangtai:''
    };
    var item=JSON.parse(localStorage.getItem('person'));
    if(parseInt(item[item.length-1].gonghao)===0){
      person.gonghao=1;
    }else{
    person.gonghao=parseInt(item[item.length-1].gonghao)+1;
  }
    var date=new Date();
    person.ruzhi=date.getTime();
    person.name=vm.name;
    person.zhiwei=vm.zhiwei;
    person.sex=vm.sex;
    person.phone=vm.phone;
    person.bumen=vm.bumen;
    person.zhuangtai=vm.zhuangtai;
    item.push(person);
    var items=JSON.stringify(item);
    localStorage.setItem('person',items);
  };
}]);
  myApp.controller('xitongController',['$scope','$state',function($scope,$state){
    var vm=$scope;
    vm.mingcheng='';
    vm.beizhu='';
    vm.add=function(){
      var gonggao={
        mingcheng:'',
        beizhu:''
      };
      var item=JSON.parse(localStorage.getItem('gonggao'));
      person.mingcheng=vm.mingcheng;
      person.beizhu=vm.beizhu;
      item.push(gonggao);
      var items=JSON.stringify(item);
      localStorage.setItem('gonggao',items);
    }
}])
