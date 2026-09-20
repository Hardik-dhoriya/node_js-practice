let str="hardikaa"

let lar = 0
let maxchar = ""

for(let i = 0 ;i < str.length ; i++){
    let count = 1
    for(let j = i+1 ; j < str.length ;j++){
        if(str[i] === str[j]){
            count++
        }
    }
    if(count > lar){
        lar = count
        maxchar = str[i]
    }
}
console.log(`${maxchar} => ${lar}`)