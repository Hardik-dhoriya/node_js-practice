let num = 17
let isprime = true

if(num === 0 && num === 1){
    isprime = false
}

for(let i = 2 ; i < num ;i++){
    if(num % i === 0){
        isprime = false
        break;
    }
}
if(!isprime){
    console.log("number is not prime")
}
else{
    console.log("number is prime")
}