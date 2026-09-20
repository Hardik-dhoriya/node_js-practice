let num =1221
let org = num
let rev = 0

while(num > 0){
    let digit = num % 10
    rev = rev * 10 + digit
    num = Math.floor(num/10)
}
if(org === rev){
    console.log("number is palindrome")
}else{
    console.log("number is not palindrome")
}