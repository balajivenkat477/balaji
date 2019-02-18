let user = [1, 1, 1, 0, 0, 0, 0];
user.unshift(0);
user.pop();
console.log(user);
let user1 = user;
user1.unshift(0);
user1.pop();
console.log(user1);
let user2 = user1;
user2.splice(0,7,'....');
console.log(user2);





