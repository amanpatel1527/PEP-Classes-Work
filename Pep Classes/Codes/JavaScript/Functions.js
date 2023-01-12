// ----->Function Declaration<------
// function grettings() {
//     alert("Namaste Duniya");
// }
// grettings();

// function sum(num1, num2) {
//     return num1 + num2;
// }

// alert("The sum of given value is " + sum(10, 20));

// ------>JAVASCRIPT Definitions<--------
// JS is a syncronous single threaded languages
// Syncronous===>line by line
// Single threaded===>beginning to end or top to down


// ----->Difference b/w let, Var , nd Const<-----
// let a = 20;
// var b = 20;
// const c = 40;

// 1.Variables using const cannot be reassigned nd const is more restricted
// a = 40;
// b = 30;
// c = 10;
// console.log(a,b,c);

// 2. we cannot redecalre the variable using in the same scope
// But in the case of var we can redecalre it
// let a  = 40;
// var b = 60
// console.log(a,b);


// 3. var is a function scope
// and let nd const are blocked


// var a = 10;
// console.log(a);
// function x() {
//     var a = 20;
//     console.log(a);
// }
// x();

// block ==>{}

// #1
// var a = 10;
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a); ===>o/p = 20 nd 20


// #2
// let a = 10;
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);  ==>O/p==> 20 nd 10


// #3
// console.log(10);
// var a = 10;

// #4
// console.log(a);
// var a = 10;

