var a = [2, 3, 6, 6, 5];
function secondLargestNumber() {

    a.sort();
    a = [...new Set(a)];
    return a[a.length - 2]
}
console.log(secondLargestNumber(a));



