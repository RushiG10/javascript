

console.log("Find the greatest number amongst two number");
var greateNumber = function(num1,num2){
    var num1 = 10;
    var num2 =-10;
    var result = num1>=num2 ?`${num1} is grether`:`${num2} is grether`;
    console.log(result);
}
greateNumber(10,-10);
var greateNumber = function(num1,num2){
    var num1 = 800;
    var num2 =899;
    var result = num1>=num2 ?`${num1} is grether`:`${num2} is grether`;
    console.log(result);
}
greateNumber(800,899);
console.log("Check  EVEN or ODD number");
var isEvenOrOddNum = function(num){
    var result = num%2 == 0  ? true : false;
    return result;
}
var result = isEvenOrOddNum(29);
var res = (result == true) ? "29 is even":"29 is odd";
console.log(`${res}`);
var isEvenOrOddNum = function(num){
    var result = num%2 == 0  ? true : false;
    return result;
}
var result = isEvenOrOddNum(44);
var res = (result == true) ? "44 is even":"44 is odd";
console.log(`${res}`);
var isEvenOrOddNum = function(num){
    var result = num%2 == 0  ? true : false;
    return result;
}
var result = isEvenOrOddNum(0);
var res = (result == true) ? "0 is even":"0 is odd";
console.log(`${res}`);
var isEvenOrOddNum = function(num){
    var result = num%2 == 0  ? true : false;
    return result;
}
var result = isEvenOrOddNum(101);
var res = (result == true) ? "101 is even":"101 is odd";
console.log(`${res}`);
console.log("Check word has even or odd length is :");
var wordLength = function(word){
    var len = word.length;
    var result = len%2 == 0 ? "Even" :"Odd";
    return result;
}
var returnValue = wordLength("javascript");
console.log(`javascript has ${returnValue}`);
var wordLength = function(word){
    var len = word.length;
    var result = len%2 == 0 ? "Even" :"Odd";
    return result;
}
var returnValue = wordLength("Developer");
console.log(`Developer has ${returnValue}`);
var wordLength = function(word){
    var len = word.length;
    var result = len%2 == 0 ? "Even" :"Odd";
    return result;
}
var returnValue = wordLength("Google chrome");
console.log(`Google chrome has ${returnValue}`);


