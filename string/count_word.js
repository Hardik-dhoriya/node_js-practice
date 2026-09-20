let str = "I am learning JavaScript";

let count = 0 

for(let i=0 ; i < str.length ; i++){
    if(str[i] !== " " && (i === 0 || str[i-1] === " ")){
        count++
    }
}
console.log(`count of word ${count}`)