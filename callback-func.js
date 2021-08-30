// file name: callback-func.js
function mainFunc(name, callFunc) {
  // receive a function by parameter and cal inside mainFunction
  callFunc(name);
}

function callFunc(name) {
  console.log('good morning', name);
}

mainFunc('sakib', callFunc);
mainFunc('tamin', callFunc);
