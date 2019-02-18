let user = {
    name: "john",
    money: 1000,

    toString() {
        return this.name;

    },
    valueOf() {
        return this.money;
    }

}

console.log(user);
console.log(+user);
console.log(user + 500);
