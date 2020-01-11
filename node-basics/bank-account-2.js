var accounts = [];

// Account Object
var account = {
    balance: 0,
    username: ''
}


// createAccount(account)
// push onto accounts array
// return account
function createAccount(account) {
    accounts.push(account);
    return account;
}


// getAccount(username)
// find matching account using forEach
// account return or undefined
function getAccount(username) {
    var matchedAccount;
    accounts.forEach( function (account) {
        if(account.username === username) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

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

var vvhAccount = createAccount({
    username: 'Victor',
    balance: 0
});

var cvhAccount = createAccount({
    username: 'Cheryl',
    balance: 0
});

deposit(vvhAccount, 250);

deposit(cvhAccount, 350);

console.log(accounts);

withdraw(vvhAccount, 201);

var testAccount = getAccount('Victor')
console.log(testAccount);

console.log(getBalance(testAccount));




