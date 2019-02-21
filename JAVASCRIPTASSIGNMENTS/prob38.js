let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
let messagesRead = new WeakSet();
messagesRead.add(messages[0]);
messagesRead.add(messages[1]);

messagesRead.add(messages[0]);
console.log("Read message 0: " + messagesRead.has(messages[0]));

messages.shift();
let readMap = new WeakMap();

console.log(readMap.set(messages[0], new Date()));

