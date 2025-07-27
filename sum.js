// Modules protect their variables and functions from leaking
var x = "Hello World";
function sum(a,b){
    
    const res=a+b;
    console.log(res);
}
// module.exports = {
//     x:x,
//     sum:sum,
// };
module.exports={x,sum};