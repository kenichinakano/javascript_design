function CheckBox(name){
    this.checked = false;
    this.name = name;
}

CheckBox.prototype.Checked = function(){
    console.log(this.name + ':' + this.checked);
};

module.exports.CheckBox = CheckBox;