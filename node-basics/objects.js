var person  = {
    gender: 'male'
}; // define object

person.firstName = 'Victor';
person['firstName'] = 'Vic';
person.lastName =  'Van Herk';
person.age = 53;

console.log(person);

delete person.age;

console.log(person);

greetUser(person);


var pet = {
    type: 'cat',
    name: 'sharkie'
};

greetPetOwner(pet);


function greetUser(person) {
    console.log('Hello ' + person.firstName + ' ' + person.lastName);
}


function greetPetOwner(pet) {
    console.log('Hello - you have a ' + pet.type + ' named ' + pet.name)
}
