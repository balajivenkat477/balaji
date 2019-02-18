let arr = [5, 2, 1, -10, 8];
arr.sort(function (a, b) {
    console.log("value of A", a);
    console.log("Value of B", b);
    console.log("---->", b - a);
    return b - a;
});
console.log(arr);