// console.log('hello world');
// var today = new Date();
// console.log(today.getDate()); //4
// console.log(today.getMonth()); //
// console.log(today.getFullYear()); //2020
// console.log(today.getHours()); //23
// console.log(today.getMinutes()); //13
// console.log(today.getSeconds());

// var start = Date.now();
// // loop for a long time
// for (var i=0; i<100000; i++) ;
// var end = Date.now();
// var elapsed = end - start; // elapsed time in milliseconds
// console.log(elapsed);

// var s = new String("dummy"); //Creates a String object
// console.log(s); //"dummy"
// console.log(typeof s);

//  var objString = new String("1" + "2"); //Creates a String object
// console.log(typeof objString);
// console.log(objString)

// console.log("Hello".length); //5
// console.log("Hello".charAt(0)); //"H"
// console.log("Hello".charAt(1)); //"e"
// console.log("Hello".indexOf("e")); //1
// console.log("Hello".lastIndexOf("l")); //3
// console.log("Hello".startsWith("H")); //true
// console.log("Hello".endsWith("o")); //true
// console.log("Hello".includes("X"));

// var splitStringByWords = "Hello World".split(" ");
// console.log(splitStringByWords); //["Hello", "World"]
// var splitStringByChars = "Hello World".split("");
// console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ","W", "o", "r", "l", "d"]
// console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
// console.log("UPPPERCASESTRING".toLowerCase());
// //"upppercasestring"
// console.log("There are no spaces in the end ".trim());

// var a = 'string'; //declares a variable but its undefined
// var b = 0;
// console.log(b);
// console.log(a); //undefined
// console.log(a + " " + b)

// console.log(true && true); // true AND true returns true
// console.log(true && false);// true AND false returns false
// console.log(false && true);// false AND true returns false
// console.log("Foo" && "Bar" && "third" );// Foo(true) AND Bar(true) returns Bar
// console.log(undefined && "Foo");// false && Foo(true) returns false
// console.log("Foo" && NaN);// Foo(true) && false returns false
// console.log("foo" && (1 == 2));// false && false(1==2) returns false

// console.log(0 && "Foo"); //First operand is falsy - return it
// console.log("Foo" && "Bar"); //First operand is truthy, return the second operand
// console.log(null || "Food"); //First operand is falsy - return second operand
// console.log("Foo" || "Bar"); //First operand is truthy, return it
console.log({} || false)