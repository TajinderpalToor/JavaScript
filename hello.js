// pwd command = present working directory in the terminal or cwd in windows which is current working directory 
//node.js should execute it in the terminal 
console.log("hello there");

//variables and primitive data types in js 
// primitive data types: string, null, number, boolean, undefined
// advanced data types: BigInt, Symbol 

// string can be double or single quotations 
let city = "Toronto";

// you cant do the below with const
let country;
country = "Canada";

// another method to declare variables, const variables cant be changed once they are declared 


const name = "TJ";

// null and undefined

const empty= null;
const empty2 = undefined; 

// if you have like const var3= hello and then var4=var3, in memory they dont point to the same thing, v4 makes a new instance in memory of the value of v3

let bools= false + false;
console.log(bools);

// Falsy Values: false, 0, "", null, undefind, NaN
// && = LOGICAL AND
// || = logical or

// ex. let test1 = true && bannas = for an and statement, js will check the first value and if its true it will go to second, using this method the answer will be the value that is checked last instead of true or false, even if the second value is false it will be placed as the result
// for or, check the first thing is true the entite thing is true, so can print first value but if the first thing is false you can chcek the second
console.log(true && "bannas");

//ex. test2 = false && bannas, this will just point to false, it is  0 and it is the last value to be checked

console.log(false && "bannas");


// nulish coelascing operater - the falsy value is messing with the operator, what if to us false is only bool false or null or undefined, maybe 0 or empty string is true for us 
// for the above use the ?? operator it will use the bool false, null and undefined 

// strictly equal which is === comapres everything as it is so if you compare a string and int it returns fale
// equality is == which converts the things to the same type and then returns true or false, so like if you have string == int, it converts both to same then compares

console.log('1'==1)
console.log('1'===1)

let username = "" //ie. an empty string which is a false value
username &&= "tiger" // username= username AND tiger = "" AND tiger, "" is false so the output is the false value which is the empty string

// The nullish coalescing (??) operator is a logical operator that returns 
// its right-hand side operand when its left-hand side operand is null or 
// undefined, and otherwise returns its left-hand side operand.