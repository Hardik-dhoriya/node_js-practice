let arr = [1,2,3,2,5,6,2,4,1]
let counted = []
for(let i=0;i<arr.length;i++){
    if (counted.includes(arr[i])) {
        continue;
    }
    let count = 1
    for(let j=i+1 ; j<arr.length ;j++){
        if(arr[i] === arr[j]){
            count++
        }
    }
    console.log(`${arr[i]} => ${count}`)
    counted.push(arr[i])
}