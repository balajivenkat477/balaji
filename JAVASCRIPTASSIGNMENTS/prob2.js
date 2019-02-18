const salaries = {
    John: 100,
    Ann: 160,
    pete: 130,
}
function sumSalaries(salaries) {
    var sum = 0;
    for (let key in salaries) {
        sum = sum + salaries[key];
    }
    return sum;
}
console.log(sumSalaries(salaries));