let str = "hardik is mca student"
let str1 = ""

for(let i = 0 ; i <str.length ; i++){
    if(str[i] === " "){
        continue
    }
    str1 += str[i]
}
console.log(str1)