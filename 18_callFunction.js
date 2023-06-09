const person = {
    name: "Stew",
    age: 54
}
function sayHello(company) {
    console.log(` ${person.name} ${person.age}  ${company}`);
}

sayHello.call(person, "Apple" )


///// applay function  ////
console.log("apply()");
sayHello.apply(person, ["Apple" , "CEO"] );


/// function bind ///
console.log("bind()");
let funRef = sayHello.bind(person);

funRef("Apple" , "CEO" );