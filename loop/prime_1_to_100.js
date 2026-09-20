let num = 100 

for(let i = 2 ; i < num ; i++){
    let isprime = true
    for(let j = 2 ; j < i ; j++){
        if( i % j === 0 ){
            isprime = false
            break
        }else{
            isprime = true
        }
    }
    if(isprime){
        console.log(i)
    }
}