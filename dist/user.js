"use strict";
class user {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
console.log(new user('John').getName());
