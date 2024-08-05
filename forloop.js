/*
for(initialize increment variable; conditional check; update){

}
ex. for(let i=0;i<10;i++){

}
*/

// Problem Set

//question 1: all even numbers from 10 to 40

for (let i=10; i<40;i++){
    if (i%2!==0){
        console.log(i);
        continue;
    }
}