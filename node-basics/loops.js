var i = 0;

var countLimit = 8;

while(i < countLimit) {
    console.log('while: ' + i);
    i++;
}

for(i = 0; i < countLimit; i++) {
    console.log('for: ' + i);
}



// function coutDownWhile(startingPoint, stoppingPoint)
// function coutDownFor(startingPoint, stoppingPoint)

function countDownWhile(start, stop) {
    while(start >= stop) {
        console.log(start);
        start--;
    }

}

function countDownFor(start, stop) {
    for( ; start >= stop; start--) {
        console.log(start);
    }
}

countDownWhile(20, 15);

countDownFor(30, 25);