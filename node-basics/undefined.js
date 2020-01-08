// var name = undefined;
//
// console.log(name);
//
//
// function doesNothing(age) {
//     console.log(age);
// }
//
// //console.log(doesNothing());
//
// doesNothing();

var name = undefined;
var x;

if (name === undefined){
    console.log('name is undefined');
}

if (typeof x === 'undefined') {
    console.log('x is undefined');
}


greetUser('Bob');

greetUser();

greetUser(1);



function greetUser(name) {

    if (typeof name === 'undefined') {
        console.log('Hello World');
    } else {
        console.log('Hello ' + name);
    }
}
//