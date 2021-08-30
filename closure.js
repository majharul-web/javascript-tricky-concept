// file name: closure.js

function parentFunc() {
  let x = 10;
  return function () {
    return x++;
  };
}
const a = parentFunc();
console.log(a());
console.log(a());
console.log(a());
