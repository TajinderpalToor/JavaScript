// key value pairs and the orignal insertion order is remembered
// your key can be anything, does not have to be a 
// string or converted to a string like in object key value pairs
// the key can even be a object or array

const myMap= new Map();

console.log(myMap);
//creates an empty map, no key value pairs

// add values
//map.set(key name,value)
myMap.set("TJ",69);
console.log(myMap);

//get values
//map.get(key)
console.log(myMap.get("TJ"));

// change value of some key value pair, use the set method again

//does key exsisit  -- returns true or false
console.log(myMap.has("TJ"));

//deleting 
//map.delete(key)

//size
// map.size

// Question 1:
const myPet= new Map();
myPet.set("name","sudo");
myPet.set("type","dog");
myPet.set("breed","Poodle");
myPet.set("age",7);
myPet.set("friends",["bit","byte","data"]);
myPet.set("colour","black");
console.log(myPet)

//remove data from the friends list

friendlist=myPet.get("friends");
friendlist.pop();
friendlist.push("chip");
myPet.set("friends",friendlist);
console.log(myPet);
