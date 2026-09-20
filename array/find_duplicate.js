let arr = [1,2,3,2,5,6,2,4,1]
let arr2 = []

for(let i=0 ; i<arr.length ; i++){
    let isdup=true
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] === arr[j]){
            isdup = false
        }
    }
    if(!isdup && !arr2.includes(arr[i])){
        arr2.push(arr[i])
    }
}
console.log(arr2)