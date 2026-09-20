let arr = [1,2,3,5,6]

for(let i=0;i<arr.length ; i++){
    if(arr[i] !== i+1){
        console.log(`${i+1}`)
        break
    }
}