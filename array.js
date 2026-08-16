//Arrays in js
const fruits=["Apple","Banana","Mango","Grapes"];

//Accessing array elements
console.log(fruits[0]);
console.log(fruits[2]);

//Updating elements
fruits[2]="Pineapple"
console.log(fruits);

//Find the number of elements in the array
console.log(fruits.length)

//Arrays in JS are dynamic can able to grow or shrink
//Adding elements
fruits.push("Mango")  //adds elements at last
console.log(fruits);

fruits.unshift("Strawberry") //adds elements at first
console.log(fruits)

fruits.splice(2,0,"Orange")
console.log(fruits)
fruits.splice(2,0,"Orange")

//Removing elements
console.log(fruits)
fruits.pop() //removes elements at last
console.log(fruits)

console.log(fruits);
fruits.shift()
console.log(fruits);


//IMPORTANT ARRAY METHODS
//For each method used for Going through every item in this array and do this action

const names=["Sanjay","Sairam","Sandeep","Pughaz"]
names.forEach((name)=>{
    console.log(`Hello ${name}`)
})

//Map method



