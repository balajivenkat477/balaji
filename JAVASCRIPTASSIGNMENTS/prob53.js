//using recursion
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));

// using iteration:
function fib(n){
    var a=1;
    var b=1;
    for(let i=3;i<=n;i++){
        let c= a+b;
        a=b;
        b=c;
    }
    return b;
}
console.log(fib(3));
console.log(fib(7));
console.log(fib(77));
