
var arr = ["HTML", "JavaScript", "CSS"];

var sorted = copySorted(arr);

function copySorted(arr){
    return arr.slice().sort();
}

console.log(sorted);
console.log(arr);