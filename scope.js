//Scopes

let a='global'

function scope(){
let b='function'

if(true){
    let c='block'
    console.log(c)
}

console.log(b) //Added changes
}

console.log(a)

scope()

console.log(b);
