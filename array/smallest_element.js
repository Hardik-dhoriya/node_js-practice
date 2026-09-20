let arr = [10,20,30,40,0,50]
let sma = arr[0]
for(let i=0 ; i<arr.length ; i++){
    if(sma > arr[i]){
        sma = arr[i]
    }
}
console.log(sma)