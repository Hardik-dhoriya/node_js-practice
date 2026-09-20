let arr = [12, 7, 25, 18, 33, 40, 9, 56, 21, 64];
let sum = 0

for(let i=0 ; i < arr.length ; i++){
    if(arr[i] % 2 === 0){
        sum = sum + arr[i]
    }
}
console.log(sum)