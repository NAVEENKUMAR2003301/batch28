// Thread

// Single Thread

// scripting

// hello
// history
// welcome

// Sync 

// Async




// Variable 

// Var     -  global scope

// Let     -  block scope 

// Const   -  block scope


// Rules 


// var - Global scope and Function Scope


var a = 10    // declration    // Intialiazation

    a = 20    // reuse     // reIntialization

var a = 30   // reDeclation


console.log(a)


// Let - Block Scope


let b = 10         // declration // Intialization

    b = 20         // reuse      // reintialization

// let b = 30        // not accept reDeclration



console.log(b);


// Const - Constant - Block Scope

const c = 100            // declration  // Intialization

    //   c = 20             // not accept reuse , reInti

// const c = 200         // not accept reDeclration

console.log(c);




// Printing Statement


// 1. console.log()

console.log(1000);

let aa = 77

console.log(aa);




// 2. alert() - pop up stracture - its directly show to value in UI side


let a1 = 100

// alert("hello team this our first class")


// 3. confirm()

// confirm("did you know js?") 


// 4. prompt()

// prompt("what is your name :- ") 


// 5. document.writeln()

// document.writeln("hhjsbdjsabj") 


// 1. i want to print my name in console side but condition first store my name inside memory and after call that.

var name1 = "team28"

console.log(name1);



// 2. i want to say good morning user to pop up format

// alert("good Morning")

// 3. i want ask question to user , the question is :- are you eligible for coming election.

// confirm("are you eligible") 

// 4. i want to know user age



// let age = prompt("what is your age");



// // 5. i want to print user age in UI side


// document.writeln(age)



// Console Method 


// 1. console.log()

console.log(100);



// 2. console.warn()

console.warn(100);



// 3. console.error()

console.error(100);



// 4. console.clear()

console.clear()






// DataTypes 

// 1 . primitive DataType 

// 1. string  - "123","sfdsf"

let a2 = "navi"

console.log(typeof(a2));


// 2. number - 1234

let a3 = 2232

console.log(typeof(a3));

// 3. boolean - true - 1  , false - 0

let a4 = true

console.log(typeof(a4));


// 4. undefined

let a5;

console.log(a5);


// 5. null - 0

// let a6 = prompt()

// console.log(a6);





// 2 . Non - primitive DataType

// 1. Array - index

// syntex - []

let fruit = ["banana","apple","orange","guava","pine-apple","cherry","graps-violet","giwi"
]

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[4]);


console.log(fruit[0]);
// console.log(fruit[fruit.length-1]); // log(fruit[indexNumber])

console.log(fruit[fruit.length-1]); // fruit[7]



// 2. object - dot notation

// syntex {}

let fruit1 = {

    redFruit : ["apple", "cherry"] ,
    yellowFruit : ["pineApple","banana"],
    greenFruit : ["guava","giwi"],
    violetFruit : "graps"

}

console.log(fruit1.violetFruit);
console.log(fruit1.redFruit[0]);
console.log(fruit1.greenFruit[1]);






// 3. function

// 4. Date







