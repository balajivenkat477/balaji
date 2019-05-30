function User(name) {
    this.name = name;
}		
let obj = new User("John");
let obj2 = new obj.constructor("Mary");
alert(obj2.name);
