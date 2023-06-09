


function show() {
    console.log("show function");

}
show();
console.log("After functio");
show();
show();
show();

var numone=100;
var numtwo=200;

var name1="Billagate"
var name2="Elon musk"

function swapVariable(valueone,valuetwo){ //Arguments
    console.log("Before swap:",valueone,valuetwo);
    var temp=valueone;
    valueone=valuetwo;
    valuetwo=temp;

}
swapVariable(numone,numtwo);
