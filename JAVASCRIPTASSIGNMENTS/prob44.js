// var x = [];
// function sumInput() {
//     var y = +prompt('enter the numbers', '');

//         while(!isNaN(x)) {
//         x.push(y);
//         y = +prompt("Enter a number");
//
//         }
//         var sum = 0;
//     for (i = 0; i <= x.length; i++) {
//            sum += value;

//     }
//     return sum;
//}
//    console.log(sumInput());
function sumInput() {


    let num = +prompt("Enter a number");
    var arr = [];

    while (!isNaN(num)) {


        arr.push(num);

        num = +prompt("Enter a number")
    }
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];
    }
    return sum;
}
console.log(sumInput());