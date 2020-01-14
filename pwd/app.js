console.log('Starting Pasword Manager');

var storage = require('node-persist');

storage.initSync();

//storage.setItemSync('aaa', 'first letter times three');

var storedValue = storage.getItemSync('aaa');
console.log(storedValue);

