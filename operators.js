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

