console.log("Que:1");
var word = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count++;
    }
    
}
console.log(`The total number of vowels including small and capital vowels is: ${count}`);
console.log("==================================================================");
console.log("Que:2");
var sumOfQube = function(){
    var sum = 0;
    for (let index = 1; index <=5; index++) {
        sum = sum + index * index * index;
    }
    console.log(`sum of Qube of number is: ${sum}`);
}
sumOfQube(5);
console.log("Que:3");
function oddPositionedChars(givenString){
    var str ="";
    for (let index = 0; index < givenString.length; index++) {
        var char = givenString.charAt(index);
        if (index%2!=0 && char!="") {
            str = str + char;
        }
        
    }
    console.log(`${str}`);
}
oddPositionedChars("Hard work always pays back");
function oddPositionedChars2(givenString){
    var str ="";
    for (let index = 0; index < givenString.length; index++) {
        var char = givenString.charAt(index);
        if (index%2!=0 && char!="") {
            str = str + char;
        }
        
    }
    console.log(`${str}`);
}
oddPositionedChars2("soon I will be Angular IT Champ");

        

