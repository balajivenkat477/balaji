var salaries = {
    "john" : 100,
    "pete" : 300,
    "Mary" : 250
};
function sumSalaries(salaries){
    var sum = 0;
    for(let value of Object.values(salaries)){
        sum += value;
    }
    return sum;
}
console.log(sumSalaries(salaries));