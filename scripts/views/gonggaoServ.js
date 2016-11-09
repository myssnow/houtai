appService.factory('gonggaoService',function(){
  return{
    loadItem:function(){
      var items=[];
      var item=JSON.parse(localStorage.getItem('gonggao'));
      for(var i=0;i<item.length;i++){
        items.push(item[i]);
      }
      return items;
    }
  }
})
