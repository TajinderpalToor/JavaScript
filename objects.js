/*

const person ={
id : 42,
name: "alex",
age: 19
}

so the {} means an object, the object has a property, which is a key and value
 this example has the properties, ex. the key is id and the value is 42, key is name and value is alex and key is age and value is 19
*/

// the keys behind the scenes are strings in js 
// also the keys are not variables they are keys and turned into strings 

// the values of the keys can be anything, another function,object, anything 


// example: you declare a object for person, that object will point to some address in memory, if you now declare a variable and make it equal the 
// object, you will not declare more space in the memory, you point to the same address

// so if you change the variable you change the object and vice versa
// above is same with the arrays 

// also if your key has a space, like first name, js wont recgonize the space so make it like this as the key "first name"
const animal ={
    id:3,
    name: "tyson",
    type: "dog"
};

console.log(animal);

animal["name"]= "tysieeee";
console.log(animal);

const temp=animal;
temp.id=7;
console.log(animal);

animal.type = "cow";


/// deleting a key
delete animal.type;
console.log(animal);

//object in keyword - is key in object

console.log("name" in animal);

// also have alot of built in methods like 
//check the mozilla firefox js website

//warmup question

const mexico ={
    id:24,
    Name: "Mexico",
    Capital: "Mexico City",
    Neighbours: ["USA","Guatenla","Belize"]
};

const tempo= mexico.Neighbours;
tempo.push("hondouras");
mexico["id"]=25;
console.log(mexico);

// Question 2:
const myPet={
    name: "Sudo",
    type:"Dog",
    breed:"Poodle",
    age: 7,
    friends: ['bit','byte','data']
};

myPet["colour"]="Black";
myPet.breed="Beagle";
const temp1=myPet.friends
temp1.pop();
temp1.push("Chip");
console.log(myPet);
console.log('--------------------------------------------')
//Question 2:
const banana ={
    name:"bannana",
    quantity:1,
    price: 1.95
};

const apple ={
    name:"apple",
    quantity:1,
    price: 1.45
};

const candy ={
    name:"candy",
    quantity:1,
    price: 3.50

};

const store ={
storeNumber:5,
locationCity:"Toronto",
locationCountry:"Canada",
products:[banana,apple,candy]
};

const temp3 = store.products;
for(let i=0;i<temp3.length;i++){
    console.log(temp3[i]);
}

temp3[0].price=1.75;
temp3[2].price=4.99;

console.log(store);
console.log(candy);
console.log(banana);

console.log("************************************************")
// Question 3
housesForSale={
area:940,
value:320000,
streetName:"Fifth Street",
built:"2012",
owner: {name:"Blake",age:29},
offers:[290000,295000,315000,312000]
};

console.log(housesForSale);
delete housesForSale.built;
const own=housesForSale.owner;
own.age=30;

const offer= housesForSale.offers;
//max offer price using map reduce

const prices=offer.reduce((max,price)=>{
    return Math.max(price,max)
    // so initially max is offer[0] then the return statement assigns the max value from comparison abck to max so at end were left with max
},offer[0])

console.log(housesForSale);
console.log(prices);


//Question 4:

const mess = (message) => {console.log(message);}

const myConsole={
log: (message) => {console.log(message);}
};

myConsole.log("ollaaaaaaa")
