// array filter can manipulate your array as well but instead of modifying each value
// this method lets you filter arrays and get back a shrunken version of the original 

// example
///techniclly the filter thing should be returning something true or false
// so if you had like returned 100, it would be fine and you get the right answer cause it is considered a truthy value, even if you return   a string or anything 
// also lets say you had an array of numbers and if odd return true, 
// you dont have a else statement, 
//technically the even numbers woukld then be undefined, but with 
//array filters they are not you get the right answer

// just make sure when you use this function, you explicitly return true or false, instead of like returning 100 which is considered "truthy", dont leave it up to js
const cities=['madrid','vancouver','mumbai','new york'];

const mcities=cities.filter((city)=> {
    return city.startsWith("m");
})

console.log(mcities);


// ------------------------------EXCERSICES----------------------------------------------- \\
const practice =[];
for (let i=1; i<21;i++){
    //console.log(i);
    practice.push(i);
}
console.log(practice);
//keep the even numbers
const evennum=practice.filter((elements)=>{
    if(elements%2===0){
        return elements;
    }

})
console.log(evennum);

//Question 2

const countries=['France','South Africa','Brazil','United States','Sweden'];
//filter and remove countries with an empty space in the string

const contremove = countries.filter((country)=>{
    if (country.includes(" ")==true){
        return country;
    }
})
console.log(countries);

console.log("Filtered Result ")
console.log(contremove);
console.log('----------------------------------------');
//Question 3

const nums=[10,20,30,40,50];
console.log(nums);
const numstimetwo= nums.map((num)=>{
    return num*2;
})
console.log(numstimetwo);

const over50= numstimetwo.filter((element)=>{
    if(element>50){
        return element;
    }
})
console.log(over50);