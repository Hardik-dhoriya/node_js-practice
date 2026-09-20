let arr1 = [10, 20, 30, 40, 50, 60];
let arr2 = [15, 20, 25, 40, 50, 70];
let issame = true

for(let i =0 ; i<arr1.length ; i++){
    for(let j = 0 ; j<arr2.length ; j++){
        if(arr1[i] === arr2[j]){
            console.log(`${arr1[i]} same first element `)
            issame = false
            break;
            
        }
    }
    if(!issame){
        break
    }
}