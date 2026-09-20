let str = "hah"

let str1 = ""

for(let i = str.length - 1 ; i >= 0 ; i--){
    str1 += str[i]
}
if(str === str1){
    console.log("string is palindrome")
}
else{
    console.log("string was not palindrome")
}