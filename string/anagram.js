let str1 = "listen" 
let str2 = "siletn" 

let isana = true
if(str1.length !== str2.length){
    isana = false
}

for(let i = 0 ; i < str1.length ; i++){
    let count = 0
    for(let j = 0 ; j < str2.length ; j++){
        if(str1[i] === str2[j]){
            count ++
        }
    }
    if(count === 0){
        isana = false
    }
}
if(!isana){
    console.log("string is not anagram")
}else{
    console.log("string is anagram")
}