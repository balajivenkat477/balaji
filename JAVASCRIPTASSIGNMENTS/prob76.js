let hamster = {
    stomach: [],
    eat(food) {
        //this.stomach.push(food);
        this.stomach += food;
    }
};
let speedy = {
    __proto__: hamster
};
let lazy = {
    __proto__: hamster
};
speedy.eat("apple");
alert( speedy.stomach ); // apple

alert( lazy.stomach );