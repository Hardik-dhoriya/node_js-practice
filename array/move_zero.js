let arr=[0,1,0,3,12]
let count = 0
let arr2=[]
for(let i=0; i<arr.length ;i++){
    if(arr[i] === 0){
        count++
    }else {
        arr2.push(arr[i])
    }
}
for(let i=0 ; i < count ; i++){
    arr2.push(0)
}
console.log(arr2)