/*
method of array object, where you create a new array by calling  a 
function on every element of the 
original array. so this is useful because you may want to apply some changes to the elements 
like mulitply them by some specific amount
*/

//example
const cities=["london","vancouver","mumbai","new york"];

const bigcities=cities.map((city)=> { return city.toUpperCase();})

//question 1

const practice=[25,26,27,28,29,30];
const squaredpractices=practice.map((practices)=> { practices**2;})
//console.log(practice);
//below will be undefined because you dont return anything 
//console.log(squaredpractices);


//question 2

const bools =[true,true,false,true,false,false];

const boolsmodify = bools.map((bool)=> {
    if(bool=== true){
        temp=Math.floor(Math.random() * 20);
        return temp;
    }
    else{
        return 0;
    }

})

//console.log(boolsmodify);

//Question 3:

const prices =[1.23,19.99,85.2,32.87,8,5.2];
const taxes=prices.map((price)=>{
    if(price>10){
        temp=price+(price*0.20);
        return temp.toFixed(2);
    }
    else return price;

})

console.log(prices);
console.log(taxes);

//Question 4:

const row = [10,20,30,40,50];
// basically make the above into a 2d array so make it 1 row, 5 cols

const matrix=row.map((elements) => {
    const matr=[];
    matr.push(elements);
    return matr;
})

console.log(matrix);
