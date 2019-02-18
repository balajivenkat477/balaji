function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.num = +prompt('enter the number?', '');
        this.value += this.num;
    };

}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);