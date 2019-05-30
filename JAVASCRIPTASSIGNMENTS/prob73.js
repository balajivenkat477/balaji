let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
alert( rabbit.jumps ); //true
delete rabbit.jumps; //true deleted
alert( rabbit.jumps ); //null, from animal
delete animal.jumps; //null deleted
alert( rabbit.jumps ); //undefined, now jumps is deleted