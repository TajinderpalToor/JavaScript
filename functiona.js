/* Regular Function....

function printHello(can have multiple paramters here){
    //code here
    return blah blah if needed;
}

Arrow Function

const printHello = () => {
    //code here
}

if you do not return anything, then the return value is by default undefined 
*/

/*
const chill = () => {
    console.log("Doing Some Chilling");
    for(let i=1;i<11;i++) {
        console.log("Chill.." + i);
    }
    console.log("That was Ice Cold!");
}

chill();
*/

//excersice 2
/*

const noRemainder = (number,mod) => {

    if (number%mod===0) return true;
     else return false;
}
const result1= noRemainder(10,7)
console.log(result1);
console.log(noRemainder(100,10));
*/

//question 3

const login = ( username, password) => {

    if (username==="admin") return true; 
    else if ( username === "monkey" && password ==="123") return true;
    else if (username === "moomoo" && password ==="farm") return true; 
    else return false;
}

const test = login('moomoo','farm');
console.log(test);