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
//Goes through every item in an array, changes/transforms it, and returns a new array.

const oldarray=[1,2,3,4];
const newarray=oldarray.map((x)=>{
    return x*3
})

console.log(newarray)

//filter() goes through every item in an array and keeps only the items that match a condition.
const numbers=[1,2,3,4,5,6];
const items=numbers.filter((x)=>{
     return x%2==0
})
console.log(items)





