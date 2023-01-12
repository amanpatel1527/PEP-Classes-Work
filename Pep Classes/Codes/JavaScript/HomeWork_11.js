// -----HomeWork-----
// Convert it into if else

// let browser = prompt("Enter your browser name");
// switch (browser) {
//     case 'Firefox':
//         alert("Js engine is spidermonkey");
//         break;
//     case 'Chrome':
//     case 'Edge':
//     case 'Opera':
//         alert("Js engine is v8");
//         break;
//     default:
//         alert("Enter valid browser name");

// }
let browser = prompt("Enter your browser name");
if (browser == "Firefox") {
    alert("Js engine is spiderMonkey");
}
else if (browser == "Chrome") {
    alert("Js engine is v8");
}
else if (browser == "Edge") {
    alert("Js engine is v8");
}
else if (browser == "Opera") {
    alert("Js engine is v8");
}
else {
    alert("Enter a valid Browser name");
}
