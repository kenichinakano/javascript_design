// ObserverList
function ObserverList(){
    this.observerList = [];
}

ObserverList.prototype.Add = function( obj ){
    return this.observerList.push( obj );
};

ObserverList.prototype.Empty = function(){
    this.observerList = [];
}

ObserverList.prototype.Iterator = function(){
    return this.observerList[Symbol.iterator]();
}

ObserverList.prototype.IndexOf = function( obj ){
    let pointer = -1;    
    this.observerList.forEach((element,index)=>{
        if (element === obj) {
            pointer = index;
        }
    });
    return pointer;
}

ObserverList.prototype.RemoveIndexAt = function( index ){
    this.observerList.splice(index, 1);
}

module.exports.ObserverList = ObserverList;