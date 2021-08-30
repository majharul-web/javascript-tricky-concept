// ** Primitive Data Type-->
let a = 'hello';
// --> now b=a
let b = a;
console.log(a, b);
// now a!=b ,b not change(immutable)
a = 'world';
console.log(a, b);

// **none primitive dataType-->
let x = { name: 'jony', roll: 10 };
// now y=x
let y = x;
console.log(x, y);
// now y=x , y change(mutable)
x.roll = 5;
console.log(x, y);
