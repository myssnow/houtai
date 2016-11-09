appService.factory('personServer',function(){
  var isPerson=new personXinxi('person');
  return{
    person:isPerson
  }
})
