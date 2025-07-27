require("./xyz.js");//there is not compulsory to add (.js) extension in require method
// const obj   =require("./sum.js");
// const {x,sum} = require("./sum.js");
const {sum,multiply} = require("./calculate/index.js");
var name="Puja";
var a=10;
var b= 20;
// obj.sum(a,b); 
sum(a,b);
multiply(a,b);
// console.log(x);
// console.log(obj.x);
// console.log(name);
// console.log(a+b);
// console.log(global);//global obj 
// console.log(this); //empty obj
// console.log(globalThis=== global);