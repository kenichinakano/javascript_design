const ObserverList = require('./observerlist.js').ObserverList;

// Subject
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
