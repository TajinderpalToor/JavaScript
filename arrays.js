const animals =["dog","cat","bear"];
console.log(animals);

//push to the end of the array
animals.push("cow");
console.log(animals);
// to remove item at end of array use pop
animals.pop();
console.log(animals);
// .unshift adds something to the front of the array 
animals.unshift("ape");

console.log(animals);

// .shift() -- removes the first element from the array
animals.shift()
console.log(animals);


let multiple=5;
const arr=[];

for(let i=10;i<16;i++){
    arr.push(i);
}
console.log(arr);
x=(arr.length);

for (let i=0;i<x;i++){
    let result=multiple*arr[i];
    console.log(arr[i] + 'x' + multiple + " = " + result);
}

let greeting = "Hello, Nice to meet you!";
for(let i=0; i<greeting.length;i++){
    console.log(greeting[i]);
}


//question 4 = bonus
const bakery=["cake","cookie","bread","scone"];

for (let i=0;i<bakery.length;i++){
    console.log(bakery[i]);
}

const myBakery=bakery; // when you do this you are not creeaeting a seperate copy the mybakery just pointst to the other one so if you update one you are auto updating the other. 
myBakery.push("croissant");
myBakery.push("Granola");

for (let i=0;i<bakery.length;i++){
    console.log(bakery[i]);
}