/* 
    falsy:
        1.false
        2.undefined
        3.null
        4.NaN
        5.''
        6.0

    truthy:
        1.'false',true
        2.' '
        3.[]
        4.{}
        .........all
*/

let x = 0;

if (x) {
  console.log('true value');
} else {
  console.log('falsy value');
}
