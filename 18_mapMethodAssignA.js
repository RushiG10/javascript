console.log("1.Add 10 into each element and log new array ");
const array = [20,11,40,25,23,11,9,31,60,2,19];
const arrayTransformed= []; 
array.forEach( (element) => {
arrayTransformed.push(element+10);
}); 
console.log(arrayTransformed); 
console.log("-----------------------------------------------------");
console.log("2.square the each array element");
const array2 = [20,11,40,25,23,11,9,31,60,2,19];
const array2Transformed= []; 
array.forEach( (element) => {
array2Transformed.push(element*element);
}); 
console.log(array2Transformed); 
console.log("--------------------------------------------------------");
console.log("3.Add the index value into its corresponding each array element");
const array3 = [20,11,40,25,23,11,9,31,60,2,19];
const array3Transformed= []; 
array.forEach( (element,index) => {
array3Transformed.push(element+index);
}); 
console.log(array3Transformed); 