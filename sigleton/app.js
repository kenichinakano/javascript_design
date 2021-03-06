let mySigleton = (function () {

    let instance;

    function init() {

        function privateMethod(){
            console.log('I am private');
        }

        let privateVariable = 'I am also private';

        return {
            publicMethod: function () {
                console.log('The public can see me!');
            },

            publicProperty: 'I am also public'
        };
    };

    return {
        getInstance: function(){
            if (! instance){
                instance = init();
            }

            return instance;
        }
    };
})();

let mySigletonA = mySigleton;
let mySigletonB = mySigleton;

console.log(mySigletonA.getInstance() === mySigletonB.getInstance());

process.exit();