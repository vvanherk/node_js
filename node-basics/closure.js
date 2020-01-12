function greetMaker(name) {
    function greet() {
        console.log('Hello ' + name + '!');
    }

    return greet;
}

var greetVic = greetMaker('Vic');

greetVic();


var greetWorld = greetMaker('world');
greetWorld();


/* function createAdder(basNumber)
    return function(numberToAdd)

    var addTen = createAdder(10)
    console.log(addTen)a

 */


function createAdder(baseNumber) {

    return function(numberToAdd) {
        return baseNumber + numberToAdd;
    }
}

var addTen = createAdder(10);
console.log(addTen(5));

var addTwenty = createAdder(20);
console.log(addTwenty(5));

