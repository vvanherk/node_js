var accounts = [];

var account = {
    balance: 0,
    username: ''
}


function createAccount(account) {
    accounts.push(account);
    return account;
}


function getAccount(username) {
    var matchedAccount;

    for(let i=0; i<accounts.length; i++) {
        console.log(accounts[i]);
        console.log(username + ' ' + accounts[i].username)
        if(accounts[i].username === username) {
            console.log('match')
            matchedAccount = accounts[i];
        }
    }
    return matchedAccount;
}


// deposit
function deposit(account, amount) {

    if(typeof amount === 'number') {
        account.balance += amount;
    } else {
        console.log('Unable to deposit - must be number');
    }
}


// withdraw
function withdraw(account, amount) {
    if(typeof amount === 'number') {
        account.balance -= amount;
    } else {
        console.log('Unable to withdraw - must be number')
    }
}

// getBalance
function getBalance(account) {
    //console.log(account.balance);
    return account.balance;
}

function createBalanceGetter(account) {
    return function() {
        return account.balance;
    }
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

deposit(cvhAccount, 450);

console.log(accounts);

withdraw(vvhAccount, 201);
withdraw(vvhAccount, '201z');


var vvhBalance = createBalanceGetter(vvhAccount);
console.log(vvhBalance());

var testAccount = getAccount('Cheryl');

console.log(testAccount);


