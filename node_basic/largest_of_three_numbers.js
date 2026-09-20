let num1 = Number(process.argv[2])
let num2 = Number(process.argv[3])
let num3  =Number(process.argv[4])

if(num1 > num2 && num1 > num3){
    console.log(`${num1} is largest number`)
}else if(num2 >num1 && num2 > num3){
    console.log(`${num2} is largest number`)
}else if(num3 > num1 && num3 > num2){
    console.log(`${num3} is largest number`)
}else{
    consoel.log("number is invalide")
}