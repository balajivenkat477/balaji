// using iteration:
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
//using recursion
console.log(sumTo(100));

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

console.log(sumTo(100));