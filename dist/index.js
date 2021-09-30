"use strict";
let id;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
let person = [1, 'Brad', true];
let employee;
employee = [
    [1, 'Hakan'],
    [2, 'John'],
    [3, 'Jill'],
];
let pid;
pid = 'string';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Right";
    Direction2["Right"] = "Left";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Hakan',
};
let cid = 1;
let customerId = cid;
customerId = 1;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const hakan = new Person(1, 'Hakan Önize');
const emre = new Person(2, 'Emre Önize');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Dev');
console.log(emp.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['hakan', 'emre', 'zeliha']);
strArray.push('hello');
