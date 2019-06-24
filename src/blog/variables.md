# ES6 => The various variations of variables

## **Var** declarations

var favNum = 42;

The **var** statement declares a variable, optionally initializing it to a value. var is hoisted, meaning
The scope of a variable declared with var is its enclosing function or, for variables declared outside any function, global. A var can be re-declared, for example: var a = 42 and later var a = true and var will happily take on its new value, in this case a boolean value.

```
let luckyNymber = 55;
var luckyNumber = 65;
var luckyNumber = { num: 42 } // re-declared no problem
console.log(luckyNumber.num); // 42
```

## **Let** it be

let favNum = 42;

The **let** statement declares a block scope local variable, optionally initializing it to a value, unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

```
var favNum = 42;
let favNum = 24; // SyntaxError: Identifier 'favNum' has already been declared
```

## The inconsistencies of **const**

const favNum = 42;

Constants are block-scoped, much like variables defined using the **let** statement, however, the value of a constant cannot change through reassignment, and it can't be redeclared. What does that mean?

```
const myNum = (num) => num
console.log(myNum(42)); // 42
console.log(myNum(24)); // 24
myNum = false // error - cannot reassign a constant
```

Note: portions of the above courtesy of [MDN web docs](https://developer.mozilla.org/en-US/)
