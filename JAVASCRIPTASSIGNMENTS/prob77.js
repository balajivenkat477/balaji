function Animal(name) {
    this.name = name;
    //console.log(this.name)
}
Animal.prototype.walk = function(){
    alert(this.name +' ' + 'walks');
}
function Rabbit(name) {
    this.name = name;	
}
Rabbit.prototype.__proto__ = Animal.prototype;

Rabbit.prototype.walk = function(){
    alert(this.name + "bounces!");
}
let animal = new Animal("elephant");
animal.walk();