let num = 123456789
let sml=9

while(num > 0){
    let digit = num % 10
    if(digit < sml){
        sml = digit
    }
    num = Math.floor(num/10)
}
console.log(sml)