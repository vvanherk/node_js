var grades = [100, 50];

var totalGrade = 0;

//var averageGrade = totalGrade / grades.length;

grades.forEach(function (value) {
    totalGrade += value;
});

console.log('Total Grade is: ' + totalGrade);

var averageGrade = totalGrade / grades.length;

console.log('Avergage Grade is: ' + averageGrade);

grades.push(75);

grades.unshift(88);

console.log(grades);

grades.pop();

console.log(grades);

grades.shift();

console.log(grades);

