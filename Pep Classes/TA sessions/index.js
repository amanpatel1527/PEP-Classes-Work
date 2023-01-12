// Date:1/12/2023 
// let a = 5;
// const b = "Hey";
// var c = ["22", 22];

// function testFun(a,b) {
//     console.log(a, b);
// }
// testFun(22, 44);
// testFun(44, 33);
// testFun(11, 22);
// testFun(55, 66);


// Q1)Make a function for gretting some anf print the message in the console

/*function gretting() {
    console.log("Hello!! Everyone");
}

gretting();*/

// ******Arrow Function*******
/*const any =()=>{
    alert("Namaste Duniya");
}*/

/*const a = "Hey!";
const b = "Namaste"
const c = "Duniyaṇ";

const res = a + " " + b + " " + c;
// console.log(res);
console.log(`${a} ${b} ${c}`);*/


// Q2)Create a function in which you decla//
/*function myFun(a,b)
{
console.log(`The value of a is ${a} and the value of b is ${b}`);
} 
myFun(10,22);*/

// ********Switch Cases*********

// Q3)make 3 functions after that call this 3 function inside the switch statement for same cases

function fun1() {
    alert("You selected fun1");
}
function fun2() {
    alert("You selected fun2");
}
function fun3() {
    alert("You selected fun3");
}

let a = 4;
switch (a) {
    case 1:
        fun1();
        break;
    case 2:
        fun2();
        break;

    case 3:
        fun3();
        break;

    default :
        alert("Enter a valid value");
}