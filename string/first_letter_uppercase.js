let str = "I am learning JavaScript";

let arr = str.split(" ")
let arr2 = []
for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr[i].length ;j++){
        if(j === 0){
            arr[i] = arr[i][j].toUpperCase() + arr[i].slice(1)
        }
    }
    arr2.push(arr[i])
}
let str1 = arr2.join(" ")
console.log(str1)