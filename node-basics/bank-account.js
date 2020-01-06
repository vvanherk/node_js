var account = {
    balance: 0
};


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