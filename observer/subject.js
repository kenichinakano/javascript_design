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

function Subject(){
    this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function( observer ) {
    return this.observers.Add( observer );
}
Subject.prototype.RemoveObserver = function( observer ) {
        this.observers.RemoveIndexAt(this.observers.IndexOf(observer));
}
Subject.prototype.Notify = function( context ) {
    const iterator = this.observers.Iterator();
    let next = iterator.next();
    while(!next.done){
        next.value.Update(context);
        next = iterator.next();
    }
}

module.exports.Subject = Subject;
