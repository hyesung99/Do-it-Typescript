"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./person/Person");
const testMakePerson = () => {
    let jane = (0, Person_1.makePerson)('Jane');
    let jack = (0, Person_1.makePerson)('Jack');
    console.log(jane, jack);
};
testMakePerson();
