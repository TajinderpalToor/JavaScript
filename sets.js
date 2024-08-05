// SETS
//store unique values of any type, kinda like array but this has unique values 
// use .size for the length of this 
// you can mix different data types, so can have like string and int in same
const myset = new Set();
myset.add(10);
myset.add(30);
myset.add(40);
myset.add("40");
console.log(myset);
console.log(" Size is " + myset.size);

//delete
myset.delete(30);
console.log(myset);
console.log(" Size is " + myset.size);

// checking set membership - this is way faster than an array
console.log(myset.has(40));


