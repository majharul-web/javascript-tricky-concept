// global scop is access any place-->
var a = 10;
const b = 15;

// function local scop-->
function add() {
  // function all variable do not access outside function
  let b = 12;
  const sum = a + b;
  console.log(sum);
}
add();

// block scope

if (a < b) {
  // let,const variable is block scope do not access outside if block
  const sum = a + b;
  console.log(sum);
}
