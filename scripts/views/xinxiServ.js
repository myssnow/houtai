appService.factory('xinxiService',function(){
  return { 
    loadItem:function(){
      var items=[];
      var item=JSON.parse(localStorage.getItem('person'));
      for(var i=0;i<item.length;i++){
        items.push(item[i]);
      }
      return items;
    }
  }
})
