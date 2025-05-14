let x=20;
let y=10;

// Arithmetic Operators

let a=x+y // Addition

console.log(a);

let s=x-y;  // Sutraction

console.log(s);

let m=x*y;  // Multiplication

console.log(m);

let d=x/y   // Diviison

console.log(d);

let e= x**y  // Exponentiation

console.log(e);

let r= x%y  // Modulus (Division Remainder)

console.log(r)

let i= x++;  // increment 

console.log(i);

let l= y--  // decrement 

console.log(l);

// Logical Operators

let t= true;

let f= false;

let and = t && f;  // logical AND

console.log(and); // output: false 

let or = t || f ;   // logical OR

console.log(or);    // output: true

let not = !t    // logical not

console.log(not);  // output: false

// Comparison Operators

console.log(x==y);  // equal  value (output: false)

console.log(x===y);   // equal value snd equal type (output: false)

console.log(x!=y);  // not equal (output: true)

console.log(x > y);  // x greater than y  (output: true)

console.log(x < y);  // x less than y (output: false)

console.log (x >= y);   // x greater than or equal to y

console.log(x <= y)     // x less than or equal to y

console.log(x ? x : y) // ternary operator( shortcut for an if-else statement ): condition ? value_if_true : value_if_false; 
//  here x=21  is a truthy value (anything other than 0, false, null, undefined, NaN, or "" is considered true in condition checks)

// Bitwise Operators:  perform operations on individual bits (0s and 1s) of numbers

x=2; // binary representation of 2: 010
y=3; // binary representation of 3: 011
console.log(x & y)  // Bitwise AND: 010 & 011 = 010 (2) ( compares each bit position and returns 1 only if both bits are 1 )

console.log(x | y)  // Bitwise OR: 010 | 011 = 011 (3)  ( compares each bit position and returns 1  if either bits is 1 )

console.log(x ^ y)  // Bitwise XOR: 010 | 011 = 011 (1)  ( compares each bit position and returns 1  if  bits is different )

console.log(~x)  // Bitwise NOT: inverts all bits of x (2: 00000010 → 11111101 = -3)

console.log(x<<1)  // Left Shift: 010 = 0100 (4) (Shifts all bits left by 1 position, adding 0 at the right)

console.log(x>>1)  // Right Shift: 010 = 0001 (1) (Shifts all bits Right by 1 position, adding 0 at the left)

console.log(x>>>1)  // Unsigned Right Shift: 010 = 001 (1) (Similar to right shift but fills with 0 instead of the sign bit)

// Type Operator:

    //typeof:  unary operator that returns a string indicating the type of the unevaluated operand

console.log(typeof 'Learn JS'); //Output: string

console.log(typeof 5);  //Output: number

console.log(typeof true);   //Output: boolean

console.log(typeof function(){});   //Output: function

console.log(typeof null);   //Output: object (bug for JS)

console.log(typeof undefined);  //Output: undefined

console.log(typeof {}); //  object

    // intanceof : Returns true if an object is an instance of an object type

let exp1=['apple', 5 ]  // for exp1 to be true it must be array or object  

console.log(exp1 instanceof String); // exp1 is not not array or object  (output: false)

console.log(exp1 instanceof Number); // exp1 is not array or object (output: false)

console.log(exp1 instanceof Array); // exp1 is array ( output: true)

console.log(exp1 instanceof Object); // exp1 is al an object (output: true)

// Assignment Operators

x=12;
y=25;

x=y; //assign value of to x
console.log(x); // ouput: 25

x+=y; // x= x+y (x= 25 + 25 )
console.log(x); // ouput: 50


x-=y; // x= x-y (x= 50 - 25 )
console.log(x); // ouput: 25


x*=y; // x= x*y (x= 25 * 25 )
console.log(x); // ouput: 625


x/=y; // x= x/y (x= 625 / 25 )
console.log(x); // ouput: 25

x%=y; // x= x%y (x= 25 / 25 )
console.log(x); // ouput: 0

x**=y; // x= x/y (x= 0 ** 25 )
console.log(x); // ouput: 0

// Conditional (Ternary) Operator: shorthand way to write an if-else statement in a single line 
// syntax: condition ? value_if_true : value_if_false.

 x = 10;
 y = 5;

let result = (x > y) ? "x is greater than y" : "x is less than y";

console.log(result); // Output: "x is greater than y"


// Nullish Coalescing Operator(??):returns right-hand operand when the left-hand operand is null or undefined

let value = null ?? "default value";
console.log(value);  // Output: "default value"

let value2 = undefined ?? "default value";
console.log(value2);  // Output: "default value"

let value3 = 0 ?? "default value";
console.log(value3);  // Output: 0

let value4 = "" ?? "default value";
console.log(value4);  // Output: ""

let value5 = false ?? "default value";
console.log(value5);  // Output: false

// Optional Chaining Operator(?.): to check if each level exists. It returns undefined if any part of the chain is null or undefined

let user={
    name:"xyz",
    address:{
        street:'abc',
        city:'xyz'
    }
}

console.log(user?.address?.street) // output: abc

console.log(user?.ID) //// ouput: undefined

console.log(user?.address?.country) //// ouput: undefined

console.log(user?.address?.city) // output: xyz

// delete Operator: delete a property from an object.

let Person={
    name:"xyz",
    address:{
        street:'abc',
        city:'xyz'
    }
}

delete Person.address.city

console.log(Person)

// Spread Operator: s used to expand an array or object into individual elements.

// array
let numberers = [1, 2, 3]
let newnumbers= [...numberers, 4, 5, 6]

console.log(newnumbers)

// object
let person = {
    name: 'John',
    age:'30',
}

let info = {
    ...person, 
    Heght: '6 ft',
    Weight: '70 kg'
}

console.log(info)

// Function call
function sum(a, b, c) {
    return a + b + c;
  
}
let values=[2,3,4];
console.log(sum(...values))

