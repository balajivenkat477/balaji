let room = {
    guest: "SpanIdea",
    toJSON() {
        return this.guest;
    }
};


console.log(JSON.stringify(room));



