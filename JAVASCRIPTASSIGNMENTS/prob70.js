function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',
    login(result) {
        alert(this.name + (result ? 'Logged In' : 'failed to login in'));
    }
};
askPassword(user.login.bind(user,true),user.login.bind(user,false));