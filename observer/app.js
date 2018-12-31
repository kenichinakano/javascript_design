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
    // subCheckboxをsubjectに拡張する
    extend( new Observer, subCheckbox);

    // observerのUpdateをoverloadする
    subCheckbox.Update = function( value ){
        this.checked = value;
    }
    // mainCheckboxにsubCheckboxをobserverとして追加する
    mainCheckbox.AddObserver(subCheckbox);
    return subCheckbox;
}
function LogNotify( subCheckBoxs ){
    subCheckBoxs.forEach((checkbox)=>{
        checkbox.Checked();
    });
}

// 事前準備
// 親のチェックボックスを用意する
const subject = new Subject();
const mainCheckbox = new Checkbox('mainCheckBox');
// mainCheckboxをsubjectに拡張する
extend( subject, mainCheckbox);

// 子のチェックボックスの管理用のリストを用意
const subCheckBoxs = [];

// 子のチェックボックスを3つ用意する
subCheckBoxs.push(addNewObserver(mainCheckbox, 'subCheckBox1'));
subCheckBoxs.push(addNewObserver(mainCheckbox, 'subCheckBox2'));
subCheckBoxs.push(addNewObserver(mainCheckbox, 'subCheckBox3'));

// checkboxのクリックイベントの際にobserverに状態を通知するためのcallback関数用意
const notify = function(boolean) {
    console.log('notify:' + boolean);
    mainCheckbox.Notify(boolean);
};

// 以下、動作確認用の処理
// 1回目のクリック：親のチェック状態がtrueになる
mainCheckbox.OnClick(notify);
LogNotify(subCheckBoxs);

// 2回目のクリック：親のチェック状態がfalseになる
mainCheckbox.OnClick(notify);
LogNotify(subCheckBoxs);

// subCheckBoxの１つ目をobserverから除外する
mainCheckbox.RemoveObserver(subCheckBoxs[0]);
// 3回目のクリック：親のチェック状態がtrueになる
mainCheckbox.OnClick(notify);
LogNotify(subCheckBoxs);

process.exit();