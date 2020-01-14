console.log('Starting Password Manager');

var storage = require('node-persist');

storage.init();

storage.setItem('asdfa', 'asdfas');

