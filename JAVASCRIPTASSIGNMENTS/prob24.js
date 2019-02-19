function randomInteger(min,max){

let user =  Math.floor((Math.random() * max) + min);
console.log(user);
}

console.log(randomInteger(1,5));