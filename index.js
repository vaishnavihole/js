// HOISTING IN JAVASCRIPT
// getName();
// console.log(x);

// var x = 7;

// function getName() {
//     console.log("Namaste Javascript");
// }


// FUNCTION IN JAVASCRIPT

// function  a () {
//    var x = 10;
//    console.log(x);
// }


// SCOPE CHAIN AND LEXICAL ENVIROMENT
function a() {
    var a = 10;
    c();
    function c() {

    }
}
a();

// LET CONST VAR

let a  = 10;

var b = 100;

// Block 
//  it is also known as Compound Statement
// if(true) {
//     var a = 10;
//     console.log(a);
// }

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}


// shadowing 
//  var varaible
var a = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

// let varaible 

let a = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);

//  const varabile 

const  c = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(c);






