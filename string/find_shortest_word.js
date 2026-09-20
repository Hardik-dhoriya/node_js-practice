let str = "hii I am learning JavaScript"
let arr = str.split(" ")
let shortcount = arr.length
let shortword = ""

for(let i = 0 ; i <arr.length ; i++){
    let count = 0 
    for(let j = 0 ; j < arr[i].length ; j++){
        count++
    }
    if(count < shortcount){
        shortcount = count
        shortword = arr[i]
    }
}
console.log(`shortest word => ${shortword} => ${shortcount}`)