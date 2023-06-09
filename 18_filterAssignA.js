console.log("1.Find out all the number which are greather than 50 and log on console");
const array = [20,11,40,25,37,49,9,90,60,2,19];
const arrayGreaterThan = array.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan);
console.log("2.Find out all even number and log on console");
const array1 = [20,11,40,25,37,49,9,90,60,2,19];
const array1GreaterThan = array.filter( (element)=> {
    return element%2==0;
});
console.log(array1GreaterThan);
console.log("3.Find out all  odd number and log on console ");
const array2 = [20,11,40,25,37,49,9,90,60,2,19];
const array2GreaterThan = array.filter( (element)=> {
    return element%2!=0; 
});
console.log(array2GreaterThan);
console.log("4.Find 0ut all the number which are multiple of 5");
const array3 = [20,11,40,25,37,49,9,90,60,2,19];
const array3GreaterThan = array.filter( (element)=> {
    return element%5==0;
});
console.log(array3GreaterThan);
console.log("5.Find number between 20 and 50 log console");
const array4 = [20,11,40,25,37,49,9,90,60,2,19];
const array4GreaterThan = array.filter( (element)=> {
    return element>=20 && element<=50;
});
console.log(array4GreaterThan);


