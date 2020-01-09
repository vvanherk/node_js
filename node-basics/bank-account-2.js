// var account = {
//     balance: 0
// };

var accounts = [];

// Account Object
// balance
// username



// createAccount(account)
// push onto accounts array
// return account


// getAccount(username)
// find matching account using forEach
// account return or undefined


// create some accounts, retrieve accounts, deposit, witdhraw





console.log(account.balance);


deposit(account, 500);
console.log(account.balance);


withdraw(account, 200);
console.log(account.balance);


console.log(getBalance(account));



// deposit
function deposit(account, amount) {
    account.balance += amount;
}


// withdraw
function withdraw(account, amount) {
    account.balance -= amount;
}

// getBalance
function getBalance(account) {
    //console.log(account.balance);
    return account.balance;
}