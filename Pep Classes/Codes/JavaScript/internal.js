// everything happens in execution context
// execution context => contains the code that currently running or getting executed

// global execution context =>GEC ==> where all js code that is not inside a function gets executed
// function execution context =>FEC==>it's created on function call

// *****Execution context is divided into two components
// ---1. Variable Environment (memory part)
// ---2. Thread of execution  (code execution part)

// ---Execution has two phases ==>
///----1.Creation phase (Memory)
///----2.Execution phase (Code)


// console.log(10);

// function x() {
//     console.log(20);
// }
// x();
// console.log(30);

/*1. GEC is created 
 2.In phase I all the variables , parameters , functions ,etc are assigned memory even before the program runs in this case variables a and function x
// note that all the variables stores

*/

// var a = 10;
// console.log(a);

// function x() {
//     var b = 20;
//     console.log(b);
// }
// x();



// ******Hoisting******

// console.log(a);
// var a = 10;
// ***OUTOUT=>undefined
// x()
// function x()
// {
//     console.log("hello");
// }
// console.log(a);
// let a =10;


// ----->Examples<-----
// #1.
/*var message = 'Helllo everyone'
console.log(message);
function a() {
    var b = 30;
    console.log(30);
}
function sum(num1, num2) {
    let result = num1 + num2;
    return result
}
sum();
console.log("bye all");

Output=>
Helllo everyone
bye all
*/



//#2.
/*
var a = 'program starts'
console.log(a);
function x(){
    let a = 10;
    function y(){
        let b = 20;
        console.log(a);
        function z(){
            console.log(b);
        }
        z();
    }
    y();
}
x();

var b = "program ends";
console.log(b);

Output=>
program starts
10
20
program ends*/


