
const user = {};
user.age = 24;
function isEmpty(user) {
    for (let key in user) {
            return false;
    }
    return true;
}
console.log(isEmpty(user));