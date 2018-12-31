function CheckBox(name){
    this.checked = false;
    this.name = name;
}

CheckBox.prototype.OnClick = function(callback){
    this.checked = !this.checked;
    callback(this.checked);
};

CheckBox.prototype.Checked = function(){
    console.log(this.name + ':' + this.checked);
};

module.exports.CheckBox = CheckBox;