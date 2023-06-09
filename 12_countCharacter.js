console.log("A");
var word = "I AM Learning javascript,the Language of internet";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' ) {
        console.log(char);
        count++;
    }
    
}
console.log(`Count total number of characters: ${count}`);
console.log("a");
var word1 = "MY favourite movie is LAggAn";
// a e i o u == A E I O U
var count1 = 0;
for (let index = 0; index < word.length; index++) {
    var char = word1.charAt(index); // 
    if (char == 'A' ) {
        console.log(char);
        count1++;
    }
    
}
console.log(`Count total number of characters: ${count1}`);