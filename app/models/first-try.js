import EmberObject from '@ember/object'; // new syntax

export default class Monster extends EmberObject {
  constructor() {
    super();
    this.victories = []; // native js way to handle properties ===>
  }
}

/*

class MyClass {
    constructor() {
        this.victories = [];
    }
}

// Creating an instance of MyClass
let myObj1 = new MyClass();
let myObj2 = new MyClass();

myObj1.victories.push('won first battle');

console.log(myObj1.victories); // ["won first battle"]
console.log(myObj2.victories); // Output: []

*/
