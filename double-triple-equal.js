// file name:double-triple-equal.js
let x = 10;

if (x == '10') {
  console.log('x is equal 10');
}
// ans is true because double equal check only value and == converts the variable values to the same type before performing comparison. This is called type coercion.

if (x === '10') {
  console.log('x is not equal 10');
}
// ans is false because === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.
