console.log("step 1.Write a function Expression to get square of the number");


var square = function(num){
    var result = num*num;
    console.log(`square is 5: ${result} `);

}
square(5);
var square = function(num){
    var result = num*num;
    console.log(`square is 6: ${result} `);
}
square(6);
var square = function(num){
    var result = num*num;
    console.log(`square is 25: ${result} `);
}
square(25);
var square = function(num){
    var result = num*num;
    console.log(`square is 100: ${result} `);
}
square(100);



console.log("step2:check and log type of function ");
console.log(`type of the squre`);

console.log("step3:write a function expression  to get the area of rectangle plot  is:");
var areaofplot = function(length,width){
    var result = length*width;
    console.log(`Area of rectangleis : ${result}`);
}
areaofplot(499,917);

console.log("step4:write A FE with two args and should swap the passed values and log on console before swap and after swap values inside function itself");
console.log("A.variable name that you can use to store function as value:swapvalues");    
function swapValueDude(hubby,wife){
    console.log("Before Swaping : ",hubby,wife);
    var temp = hubby
    var hubby = wife
    var wife = temp
    console.log("After Swaping  : ",hubby,wife);

}
swapValueDude("Virat","Anushka")
function swapValueDude(value1,value2){
    console.log("Before Swaping : ",value1,value2);
    var temp = value1
    var value1 = value2
    var value2 = temp
    console.log("After Swaping  : ",value1,value2);

}
swapValueDude(1000,2000);

console.log("step5:write a FE which can perform the below steps for string");
console.log("A.Find the total character available in string is:");
var firstName ="JS the most popular language of internet";
var nameLength = firstName.length;
console.log("B.Total number of character in given string is:",nameLength);
console.log("C.Find the character at index 6");
var namecharAt = "JS the most popular language of internet";
var namecharAt= firstName.charAt;
console.log("the character at index 11 is:",namecharAt(6));
console.log("C.Find the character at index 11");
var firstName = "JS the most popular language of internet";
var nameIndexof= firstName.indexOf(11);
