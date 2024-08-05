/*
let i=0; // declare the variable being incremented and set it to 0

while (i<some number) // set the condition based in which we keep incrementing
{
do whatever code

i++ or i-- or whatever you are doing to the variable (incrementing or decrementing)

} 
// ctrl-c to get out of the loop


// if you do break; you jump out the loop, skip the code 
*/

// Warmup Excersice

/*
let i=5;

while(i<=10){
    console.log(i);
    i++;
}
*/


// Excerscice 2:

/*
let loggedIn= false;
let i=1;
while(loggedIn==false){
    console.log('Incorrect Login');
    if (i===3){
        loggedIn=true;
    }
    i++;

}
console.log('Sucessfully Logged In');

*/
// Excersice 3: Print every even number between 10 and 40

/*
let i=10;
while(i<=40){
    if (i%2===0){
       // console.log(i);
    }
    i++;
}

// print every odd number 
i=10;
while(i<=40){
    if (i%2!=0){
        console.log(i);
    }
    i++;
}

*/

// question 3

i=1
while(i<=100){
   
     if(i===50){
        console.log("Half way There");
        i++;
        continue;
    }
    else if(i===100){
        console.log("You made it!");
        i++;
        continue;
    }
    else if (i%10===0){
        console.log('Checkpoint!' + i );
        i++;
        continue;
    }

    else{
        i++;
        continue;
    }

}
console.log("All done!")