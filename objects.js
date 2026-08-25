//Object is a datatype that stores value in key-pair value

let person={
    firstname:"Sanjay",
    lastname:"Kumar",
    age:22
}

//Accessing a property in object
console.log(person.firstname)

//Another way of accessing a object
console.log(person['firstname'])

//Changing a property in object
person.firstname="Tony";
person.lastname="Stark"
console.log(person);

//Delete a property in object
delete person.age;
console.log(person)

//checking a property in object
console.log("age" in person)

Object.v


