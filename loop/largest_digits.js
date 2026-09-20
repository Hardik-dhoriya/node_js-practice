let num = 123954685

let lar = 0
while(num > 0){
    let digit = num % 10
    if(digit > lar){
        lar = digit
    }
    num = Math.floor(num / 10)
}
console.log(lar)