//function default value-undefined

//Simple function
function getname(){
    console.log("this is a function")
}

getname() //---->calling a function

//Passing A parameter

function printname(name){ //---->parameter
console.log("Hi "+ name)
}

printname("sanjay") //---->argument

function data(name,age){ //---->parameter
console.log("My name is "+ name,"My age is "+age)
}

data("sanjay",22)


//Default value in a function
function defaault(name="default"){
    console.log(name)
}
defaault()

// REST PARAMETER in a function
// Used for passing 'n' number of parameter in a function
// Returns value in a array format

function multiple(...values){
    console.log(values)
}

multiple(1,2,3,4,"name",[1,2,3])

//Anonymous function
let fullname=function(name1,name2){
    console.log(name1+' '+name2)
}

fullname('sanjay','kumar')

//Arrow function
let votechecker=(name,age)=>{
    if(age>=18){
        return `Hello ${name} Your age is ${age} and You are eligible`
    }else{
        return `Hello ${name} Your age is ${age} and You are not eligible`
    }

}
let validate=votechecker("sanjay",22)
console.log(validate);



