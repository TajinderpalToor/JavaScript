// for of loops, which are basically
/*

for (const someValue of someIterable)

- so basically you can use variable to itirate through arrays, strings,maps,etc.

- const or let
*/

const random = ['torontomapleleafs','montrealcanadians','newyorkrangers','flordiaoanthers'];

for (const i of random){
    console.log(i);
}

const message = "today was fun";

for (const chars of message){
    console.log(chars.toUpperCase());
}