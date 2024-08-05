// reduce method on arrays 
// returns a single accumulated value

//example
// technically the first value you put in the reduce(in this case result), is what the return statement assigns the value to
const nums=[5,10,15,20,25,30,35];
let sum=0
const sum2= nums.reduce((result,number)=>{
console.log(result);
return result+number;
},0)
// the zero before the closing ) is the kickoff or starting value 

console.log(sum2);

// excpects a return value - if you dont some things will be undefined 

// example with cities
const cities=["toronto","mia","mtl","vancity"];
const cities2= cities.reduce((result,city)=>{
return result+city+'--';
},"")
// the "" this time is an empty string, that is the starting value 

//console.log(cities2);

// excersices

//Question 1
const companies=['apple','tesla','spacex','amazon','meta','google'];

const modded=companies.reduce((result, company,i)=>{
if (company.startsWith('a')){
    return result; 
}
if (i===5){
    return result+company;
}

return result+company+"-";
},"")
console.log(modded);

// how to reduce extra - at the end - use the extra iteration paramter (i)


