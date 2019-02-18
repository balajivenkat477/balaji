function makeUser(){
    return{
        name:"john",
        abc: function(){
            return this
        }
    };
    };
    let user = makeUser();
    console.log(user.abc().name);
