//Hoisting in JS

//If we declare a variable inside a function it applicable for that function only 
// not outside where it is not accessible

function hoist(){
    a=30;

    let b=10;
}

hoist()

console.log(a);
console.log(b);
