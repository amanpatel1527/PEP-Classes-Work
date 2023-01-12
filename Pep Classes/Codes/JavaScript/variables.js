// js was create to make web pages alive (interactivity)
// script => basic program in js
// we can write js in html alsoo and it runs
// js earlier called as liveScript
//  js specification is ECAMASCRIPT
// we can run it in browser , servers , mobiles or any devices that has javascript engine (special program)
// Different js engines  have diff names
//  V8 - in chrome, opera , Edge
// SpiderMonkey - firefox
// Chakra

/*Multi 
line 
comment*/

console.log("Namaste Duniya")
// -------Variables-------
// It's a type of container which is used stores different types of data types
// There are total 8 data types
// number,null,undefined,boolean,strings , arrays , objects 
// variables is named storage 
// In 3 ways => let, var and const
// let keyword is latest syntax

let message;//declaration of variables

message = 'Hello world'; // initialize with some value
message = 20; //again initialize

// console.log(message);
// console.log(typeof(message));
// alert(message);

// ----
// let time = prompt("What is the entering time?")
// if(time <= 10){
//     alert("You can come to class")
// }
// else if(time<=11){
// alert("You can come to class but stand outside");
// }
// else{
//     alert("go back to your bed");
// }

let age = prompt("how old are you?");
let accessAllowed = age>18 ? 'accesss is allowed' : 'access is not allowed'
 alert(accessAllowed);