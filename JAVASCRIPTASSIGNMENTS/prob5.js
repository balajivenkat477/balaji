let user = {
    name: "john",

    toString() {
        return this.name;
    },
    valueOf() {
        return this.name;
    }
}
console.log(user);
console.log(user + 500);
