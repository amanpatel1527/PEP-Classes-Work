// ****Scope,Scopechaining, lexical scope,closure
// Fun can access the value through its lexical environment 

// scopechaining and lexical scope
// child to parent to grand parent too...global scope
/*
var a = 10;
function x() {
    function y() {
        console.log(a);
    }
    y()
}
x()
*/
// Getting an error b/c vise versa of above code is not true
/*function x() {
    var a = 10;
}
x();
console.log(a);
*/


//*---->Closures<------ */
// functions bundled or attached with its lexical environment 

// function x() {
//     let a = 10
//     function y() {
//         console.log(a);
//     }
//     y()
// }
// x()

// ---->Fun as first class citizens

function x()
{
    let a=20;
    return function y(){
        console.log(a);
    }
}
let newFunc = x();
console.log(newFunc);

