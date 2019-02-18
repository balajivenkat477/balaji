const menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
function multiplyNumeric(menu) {
    /*for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }*/
    for (let key in menu) {
        if (!isNaN(menu[key])) {
            menu[key] = menu[key] * 2;
        } else {
            menu[key] = menu[key];
        }
        }
    console.log(menu);
    }

multiplyNumeric(menu);


