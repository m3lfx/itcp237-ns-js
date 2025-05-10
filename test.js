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
// console.log({} || false)

// function greeting(name) {
//     if (name === undefined) {
//         name = "joEY"
//     }
    
//     name = name && "John";
//     console.log(name);
//     console.log("Hello " + name);
// }
// greeting("Johnson"); // alerts "Hi Johnson";
// greeting();

// function isAllowedToDrive(age) {
//     if (age > 21) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isAllowedToDrive(22));
// sayDay(1) //Sunday
// sayDay(3)
// function sayDay(day) {
//     switch (day) {
//         case 1: console.log("Sunday");
//             break;
//         case 2: console.log("Monday");
//             break;
//         default:
//             console.log("We live in a binary world. Go to Pluto");
//     }
// }
// c = add(1, 2);
// function add(a, b) {
//     return a + b;
// }

// console.log(c);

// c = add(1, 2);
// const add = function (a, b) {
//     return a + b;
// }


// const add = (a, b) => a + b
// c = add(1, 2);
// console.log(c);

const obj = {
    "full name": "mike",
    address: ['address1', "address2"],
    phone: {
        phone1: "9999",
        phone2: "8888",
        },
    zip: function zip(){
        return '1456'
    }
}

// console.log(obj.address)
console.log(obj.zip(), obj["full name"])

var colors = ['red', 'green', 'blue', 'white'];
colors.forEach(color => console.log(color)
);

var founders = new Map();
founders.set("facebook", "mark");
founders.set("google", "larry");
console.log(founders.size); // 2
console.log(founders.get("twitter")); // undefined
console.log(founders.has("google")); // false
for (var [key, value] of founders) {
    console.log(key + " founded by " + value);

    var author = {
    firstname: "Douglas",
    lastname: "Crockford",
    book: {
        title: "JavaScript- The Good Parts",
        pages: "172"
    }
};
console.log(author['firstname']); //Douglas
console.log(author.lastname); //Crockford
console.log(author.book.title);

var mySet = new Set();
mySet.add(1);
mySet.add("Howdy");
mySet.add("foo");
console.log(mySet.has(1)); // true
mySet.delete("foo");
console.log(mySet.size); // 2
for (let item of mySet) console.log(item);
}
