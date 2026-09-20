let arr = [10,20,30,40,50]
let sma = arr[0]
let sec = Infinity

for(let i=0;i<arr.length ; i++){
    if(sma > arr[i]){
        sec = sma
        sma = arr[i]
    }
    else if (arr[i] < sec && arr[i] !== sma) {
        sec = arr[i];
    }
}
console.log(sec)