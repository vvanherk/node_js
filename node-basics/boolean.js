var isValid = true;

isValid = false;


isValid = !isValid;

if(isValid == true) {
    console.log('Data is valid');
} else {
    console.log('Data is not valid');
}

var booVar = true;
console.log('booVar is: ' + booVar);

var newBooVar = toggleBoolean(booVar);
console.log('newBooVar is: ' + newBooVar);


toggleBoolean('Victor');


function toggleBoolean (booVar) {

    if(typeof booVar === "boolean") {
        return !booVar;
    } else {
        console.log('Warning!  Not a boolean');
    }
}