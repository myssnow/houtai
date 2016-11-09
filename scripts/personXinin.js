function personXinxi(person){
  this.person=person;
  this.items=[];
  this.loadItem();
}


personXinxi.prototype.loadItem=function(){
  var item=JSON.parse(localStorage.getItem(this.person));
  for(var i=0;i<item.length;i++){
    this.items.push(item);
  }
}
