// only var variable hoisting-->
console.log(a);
/* get result undefined */
var a = 10;

// function foisting-->

/* function show result successfully */
add();
function add() {
  // function all variable do not access outside function
  let b = 12;
  const sum = a + b;
  console.log(sum);
}
