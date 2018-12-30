const Subject = require('./subject.js').Subject;
const Checkbox = require('./checkbox.js').CheckBox;
const Observer = require('./observer.js').Observer;

function extend( obj, extension ){
    for( let key in obj ){
        extension[key] = obj[key];
    }
}
function addNewObserver( mainCheckbox, name){
    const subCheckbox = new Checkbox(name);
    extend( new Observer, subCheckbox);

    subCheckbox.Update = function( value ){
        this.checked = value;
    }
    mainCheckbox.AddObserver(subCheckbox);
    return subCheckbox;
}
function LogNotify( subCheckBoxs ){
    subCheckBoxs.forEach((checkbox)=>{
        checkbox.Checked();
    });
}

const subject = new Subject();

const mainCheckbox = new Checkbox('mainCheckBox');
extend( subject, mainCheckbox);

const subCheckBoxs = [];

subCheckBoxs.push(addNewObserver(mainCheckbox, 'subCheckBox1'));
subCheckBoxs.push(addNewObserver(mainCheckbox, 'subCheckBox2'));
subCheckBoxs.push(addNewObserver(mainCheckbox, 'subCheckBox3'));

const notify = function(boolean) {
    mainCheckbox.Notify(boolean);
};

mainCheckbox.OnClick(notify);
LogNotify(subCheckBoxs);

mainCheckbox.OnClick(notify);
LogNotify(subCheckBoxs);

mainCheckbox.RemoveObserver(subCheckBoxs[0]);
mainCheckbox.OnClick(notify);
LogNotify(subCheckBoxs);

process.exit();