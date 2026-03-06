// // Thread

// // Single Thread

// // scripting

// // hello
// // history
// // welcome

// // Sync 

// // Async




// // Variable 

// // Var     -  global scope

// // Let     -  block scope 

// // Const   -  block scope


// // Rules 


// // var - Global scope and Function Scope


// var a = 10    // declration    // Intialiazation

//     a = 20    // reuse     // reIntialization

// var a = 30   // reDeclation


// console.log(a)


// // Let - Block Scope


// let b = 10         // declration // Intialization

//     b = 20         // reuse      // reintialization

// // let b = 30        // not accept reDeclration



// console.log(b);


// // Const - Constant - Block Scope

// const c = 100            // declration  // Intialization

//     //   c = 20             // not accept reuse , reInti

// // const c = 200         // not accept reDeclration

// console.log(c);




// // Printing Statement


// // 1. console.log()

// console.log(1000);

// let aa = 77

// console.log(aa);




// // 2. alert() - pop up stracture - its directly show to value in UI side


// let a1 = 100

// // alert("hello team this our first class")


// // 3. confirm()

// // confirm("did you know js?") 


// // 4. prompt()

// // prompt("what is your name :- ") 


// // 5. document.writeln()

// // document.writeln("hhjsbdjsabj") 


// // 1. i want to print my name in console side but condition first store my name inside memory and after call that.

// var name1 = "team28"

// console.log(name1);



// // 2. i want to say good morning user to pop up format

// // alert("good Morning")

// // 3. i want ask question to user , the question is :- are you eligible for coming election.

// // confirm("are you eligible") 

// // 4. i want to know user age



// // let age = prompt("what is your age");



// // // 5. i want to print user age in UI side


// // document.writeln(age)



// // Console Method 


// // 1. console.log()

// console.log(100);



// // 2. console.warn()

// console.warn(100);



// // 3. console.error()

// console.error(100);



// // 4. console.clear()

// console.clear()






// // DataTypes 

// // 1 . primitive DataType 

// // 1. string  - "123","sfdsf"

// let a2 = "navi"

// console.log(typeof(a2));


// // 2. number - 1234

// let a3 = 2232

// console.log(typeof(a3));

// // 3. boolean - true - 1  , false - 0

// let a4 = true

// console.log(typeof(a4));


// // 4. undefined

// let a5;

// console.log(a5);


// // 5. null - 0

// // let a6 = prompt()

// // console.log(a6);





// // 2 . Non - primitive DataType

// // 1. Array - index

// // syntex - []

// let fruit = ["banana","apple","orange","guava","pine-apple","cherry","graps-violet","giwi"
// ]

// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[2]);
// console.log(fruit[4]);


// console.log(fruit[0]);
// // console.log(fruit[fruit.length-1]); // log(fruit[indexNumber])

// console.log(fruit[fruit.length-1]); // fruit[7]



// // 2. object - dot notation

// // syntex {}

// let fruit1 = {

//     redFruit : ["apple", "cherry"] ,
//     yellowFruit : ["pineApple","banana"],
//     greenFruit : ["guava","giwi"],
//     violetFruit : "graps"

// }

// console.log(fruit1.violetFruit);
// console.log(fruit1.redFruit[0]);
// console.log(fruit1.greenFruit[1]);


// console.clear()


// // operators 

// // 1. Arithmetic operator - methamatical operation

// // Addition       -  (+)

// console.log(10 + 20);


// // subraction     -  (-) 

// console.log(10 - 20);


// // multiplication -  (*)

// console.log(10 * 20);


// // division     -  (/)

// console.log(10/20);


// // modulus     - (%)

// console.log(12 % 200);


// // exponencial - (**)

// console.log(2**3); // 2^3 = 2*2*2 = 8


// // increament - (++) = +1

// // 1. pre Increament   = ++var

// // 2. post Increament  = var++

// // decreament - (--) = -1

// // 1. pre Decreament   = --var

// // 2. post Decreament  = var--




// let num1 = 2

// num1++

// console.log(num1);


// // your searching element , if available in variable side you just calculate that value side only you calculate that variable till only.


// let num2 = 4      // null  

//     num2 = num2++ // num2 = 4

//     console.log(num2);


// let num3 = 5      // null
  
//     num3 = ++num3 // ++num3 = ++5 = 6

//     console.log(num3);



//     // your searching Element find in value side , Calculate that value side fully 

// let num4 = 6     // 

// let num5 = num4++ // num4 :- 6

// console.log("num4 :- ",num4); // num4 :- 7
// console.log("num5 :- ",num5); // num5 :- 6



// let num7 = 2

// let num8 = --num7 // --num7 = --2 = 1

// console.log("num7 :- ",num7); // 1
// console.log("num8 :- ",num8); // 1



// let num9 = 1        // 

// let num10 = --num9  // 

// let num11 = ++num10 //

// console.log("num9 :- ",num9);  // 0
// console.log("num10 :- ",num10);// 1
// console.log("num11 :- ",num11);// 1


// console.clear()

// // Assignment operator


// let number1 = 5

//     number1 = number1 + number1 // 5 + 5 = 10

//     console.log(number1);


// let number2 = 20

// let AdditionVal = 100

//     number2 %= AdditionVal
    
//     // Number2 += AdditionVal

//     console.log(number2);
    


//     // Relational or Comparision operator


//     // Meaning           syntex         example         result

//     // lessThen            <              5 < 5          false

//     // greaterThen         >              10 > 4         true

//     // lessThenEq         <=              5 <= 5         true

//     // greaterThenEq      >=              12 >= 0.12     true

//     // loosyTypeEq        ==              5 == "5"       true

//     // loosyNotEq         !=              5 != "5"       false

//     // strictlyTypeEq     ===             5 === "5"      false

//     // strictlyNotEq      !==             5 !== "4"      true


//     console.log(5>.5);   //  true
//     console.log(4!==4);  //  false
//     console.log(5==".5"); // false


//     // Logical operator 

//     // AND  - &&

//     // true && true && true = true 

//     // false && true && true = false 

//     // false && false && false = false 

//     // OR   - ||

//     // true || true || true = true

//     // false || false || false = false 

//     // true || false || fasle  = true

//     // NOT  - !

//     // !(true) = false


//     // Example 


//     console.log(5===5 && 5>=5 && 3>=.3); // true &&  true && true = true

//     console.log(!((5==="5" || 6>=.66)&&(2>3 && 8>=74))); // false

//     // (false || true) = true 

//     // (false && false) = false

//     // !(true && false) = !(false) = true 
    

//     // Ternary operator

//     // condition ? statement : statement;


//     5!==5 ? console.log("true") : console.log("false");
    
//     console.clear();
    

//     // Concatination (+)


//     let name2 = "iron"

//     let name3 = "man"


//     console.log(name2 +" hgjdsv "+ name3);


//     // Template String - ``

//     let name4 = "spider"

//     let name5 = "man"

//     console.log(`${name4} ${name5}`);



//     // Type Conversion

//     // Implicit Type Conversion

//     console.log(typeof("hello" + 1));


//     // string - string anything string


//     console.log(typeof("1" + "1"));
//     console.log(typeof("1" + 1));
//     console.log(typeof("1" + true));
//     console.log(typeof("1" + undefined));
//     console.log(typeof("1" + null));
//     console.log(typeof("1" + [1,2]));
//     console.log(typeof("1" + {k:4}));

//     // Number


//     console.log(typeof(1 + "1"));
//     console.log(typeof(1 + 1));
//     console.log(typeof(1 + true));
//     console.log(typeof(1 + undefined));
//     console.log(typeof(1 + null));
//     console.log(typeof(1 + [1,2]));
//     console.log(typeof(1 + {a:4}));

//     // boolean


//     console.log(typeof(true + "1"));
//     console.log(typeof(true + 1));
//     console.log(typeof(true + true));
//     console.log(typeof(true + undefined));
//     console.log(typeof(true + null));
//     console.log(typeof(true + [1,3]));
//     console.log(typeof(true + {j:8}));
    

//    console.clear();
   

//     // Explicit type Conversion

//     // Constractor 

//     // NumberConstractor

//     console.log(typeof(1 + Number("1")));

//     console.log(Number());
//     console.log(Number(""));
//     console.log(Number("123"));
//     console.log(Number("abc"));
//     console.log(Number(true));
//     console.log(Number(false));
//     console.log(Number(undefined));
//     console.log(Number(null));
//     console.log(Number([123,456]));
//     console.log(Number({h:9}));


//     // Boolean

//     console.log(Boolean());
//     console.log(Boolean(""));
//     console.log(Boolean("123"));
//     console.log(Boolean("abc"));
//     console.log(Boolean(true));
//     console.log(Boolean(false));
//     console.log(Boolean(undefined));
//     console.log(Boolean(null));
//     console.log(Boolean([]));
//     console.log(Boolean({}));


// Flow Control Statement 

// 1 . conditional statement 



// if condition


// syntex 

// if(condition){
//     // statement
// }


// condition true = allow 


// example 

if(5===5){

    console.log("true");
    

}




// if else condition


// syntex 

// if(condition){
//     // statement
// }else {
//     // statement
// }


// condition true = if inside statement work ,

//           false = else inside statement work


if(-1){
    console.log("true");
    
}else{
    console.log("false");
    
}




// else if condition

// let hour = Number(prompt("enter time now (24hrs)"))

// console.log(hour);


// if(hour >= 1 && hour <= 6){
//     alert("good morning");
    
// }else if(hour >= 7 && hour <= 12){
//     alert("morning");
    
// }else if(hour >= 13 && hour <= 16){
//     alert("Good afternoon");
    
// }else if(hour >= 17 && hour <= 19){
//     console.log("Good Evening");
    
// }else {
//     alert("good Night");
    
// }



// nested if condition

// let age = prompt("enter your age")
// let height =  prompt("enter your height (cm)")
// let weight = prompt("enter your weight (kg) ")


// if(age >= 18){

//     if(height >= 155){

//         if(weight >= 55){
            
//             alert("congradulation your eligible ⭐⭐⭐");
            


//         }else {
//             alert(`your weight is :- ${weight} kg only. basic weight 55kg.`);
            
//         }

//     }else {
//         alert(`your height is :- ${height} cm only. bacic height 155cm.`);
        
//     }

// }else{
//     alert(`your age is :- ${age} old only. basic age 18yr`);
    
// }



// switch statement

// syntex :- 

// switch(condition){
//     case  "value" : statement ; break
//     case  "value" : statement ; break
//     case  "value" : statement ; break
//     case  "value" : statement ; break
//     case  "value" : statement ; break
// }


// example :- 


let trafficLight = "red"

switch(trafficLight){

    case "red" : console.log("vechile stop"); break
    case "yellow" : console.log("vechile start"); break
    case "green" : console.log("vechile go"); break

    default : console.log("plesent day");
        
}






// 2. looping statement


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


// for loop 

    // syntex :- 

    // for( intialiazation ; condition ; iteration ){
        
    //     // statement
        
    // }

    for(let a = 1 ; a <= 5 ; a++){
        console.log("for loop :- ",a); // 1 2 3 4 5
    }


    // a = 1  ; 1 <= 5 = true ; 1++ = 2
    // a = 2  ; 2 <= 5 = true ; 2++ = 3
    // a = 3  ; 3 <= 5 = true ; 3++ = 4
    // a = 4  ; 4 <= 5 = true ; 4++ = 5
    // a = 5  ; 5 <= 5 = true ; 5++ = 6
    // a = 6  ; 6 <= 5 = false .

    // 1 to 10 number inside i want to find odd , even number .


    for(let a = 1 ; a <= 10 ; a++){
        if (a % 2 == 0) {
          console.log(" even :- ", a);
        }
    }


console.clear();


// while loop 


   // syntex :- 

//    intialiazation

//    while(condition){
//       // statement 

//       iteration
//    }


 let b = 3

 while(b >= 10){

    console.log(b);

    b--

 } 

 
 // b = 3 ; 3 >= 0 = true ; 3 ; 3-- = 2
 
 // b = 2 ; 2 >= 0 = true ; 2 ; 2-- = 1
 
 // b = 1 ; 1 >= 0 = true ; 1 ; 1-- = 0
 
 // b = 0 ; 0 >= 0 = true ; 0 ; 0-- = -1 
 
 // b = -1; -1 >=0 = false .



// do while loop 

// syntex :- 

// iteration 

// do{
    //     // statement 
    
    //     iteration
    // }
    
    // while(condition)
    
    
    // example :- 
    
    // do while
    
    let a1 = 3           // 3
    
    do{
        console.log(a1); // 3
    
        a1--             // 3-- = 2
        
    }
    
    while(a1 >= 0)       // 2 >= 10 = false


// for of loop - string ,array ,function

let str = "javascript"

// for of 

// for(declration of str){
//     // statement
// }

for(let a of str){

    console.log(a);
    
}


let arr = ["apple","banana","orange","graps"]

for(let b of arr){

    console.log(b);
    
}


// for in loop - object


let obj = {
    name1 : "a",
    role  : "developer",
    salary: 2000000
}

// syntex 

// for(declartion in obj){

//     // statement
// }


for(let c in obj) {

    console.log(obj[c]);
    
}

console.clear();


// Function - important


// reusable 
// block of code
// specific task


// syntex 

// function one(parameter){
//     // statement
//     // return
//     // yeild
// }

// one(argument)


function one(){

    console.log("hello world");

    
}

one()

// parameter , argument

function two(a,b,c,d){

    console.log(a + d);
    console.log(b);
    console.log(c);
    console.log(d);
    

}

two(10,20,30,40)


// return


function three(){
    return 100
}

let newVar = three()

console.log("three :-",newVar);

function four(){
    console.log("four :-", newVar);
    
}

four()


function five(a){
    return a
}

let a2 = five(200)

function six(b){

    console.log(a2 + b);
    

}
six(30)



let obj1 = {
    name1 : "john"
}


function accessOuterElement(){

     console.log(obj1.name1);
     
}

accessOuterElement()





// types of function :- 


// named function 

function named(parameter){

    console.log(parameter);
    
}

named("named function")

// annoynmous function 

let annoynmous = function(parameter){

    console.log(parameter);
    
}

annoynmous("annonymous function")



// arrow function

let arrow = (parameter)=>{

    console.log(parameter);
    
}

arrow("arrow function")




function form(a,b,c,d,e = "no"){
    console.log("name :-",a);
    console.log("department :-",b);
    console.log("grade :-",c);
    console.log("blood grp :-",d);
    console.log("disability",e);
    
    
}

form("kamal","ece","10","b+ve","yes")
form("praveen","ece","9","o+ve")











    
    
    
    
    
    
    
    
    
    
   
    
    
    


    
    














// // 3. function

// // 4. Date







