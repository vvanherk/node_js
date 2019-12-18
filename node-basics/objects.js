var person  = {}; // define object

person.firstName = 'Victor';
person.lastName =  'Van Herk';
person.age = 53;

console.log(person);

delete person.age

console.log(person);

greetUser(person)

var friend : person = new person()
friend.firstName = 'Bob'

function greetUser(person) {
    console.log('Hello ' + person.firstName + ' ' + person.lastName);
}

