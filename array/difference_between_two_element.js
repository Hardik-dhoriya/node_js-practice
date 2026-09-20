let arr = [10, 25, 7, 40, 15, 60, 20];
let lar = arr[0]
let sma = arr[0]

for(let i=0 ; i<arr.length ; i++){
    if(lar < arr[i]){
        lar = arr[i]
    }
    if(sma > arr[i]){
        sma = arr[i]
    }
}
let dif = lar - sma

console.log(`largest difference => ${dif}`)