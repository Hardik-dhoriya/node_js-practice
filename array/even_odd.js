let arr = [10,15,20,65,30,54,56,55,89]

let even = []
let odd = []

for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 === 0){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
}
console.log(`even element => ${even}`)
console.log(`odd element => ${odd}`)