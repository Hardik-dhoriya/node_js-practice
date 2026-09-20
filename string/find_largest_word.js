let str = "I am learning JavaScript"

let arr = str.split(" ")
let lar = 0
let larword = ""

for(let i =0 ; i < arr.length ; i++){
    let count = 0
    for(let j = 0 ;j < arr[i].length;j++){
        count++
    }
    if(count > lar){
        lar = count
        larword = arr[i]
    }
}
console.log(`largest word => ${larword} , ${lar}`)
