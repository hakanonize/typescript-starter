let id: number;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

let person: [number, string, boolean] = [1, 'Brad', true];

let employee: [number, string][];

employee = [
  [1, 'Hakan'],
  [2, 'John'],
  [3, 'Jill'],
];

let pid: string | number;
pid = 'string';

//Enum
enum Direction1 {
  Up = 2,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Right',
  Right = 'Left',
}

type User = {
  id: Number;
  name: String;
};

const user: User = {
  id: 1,
  name: 'Hakan',
};

let cid: any = 1;
let customerId = <number>cid;

customerId = 1;

function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

interface UserInterface {
  id: Number;
  name: String;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

type Point = number | string;

const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

//Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Shawn', 'Dev');

console.log(emp.register());

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['hakan', 'emre', 'zeliha']);

strArray.push('hello');
