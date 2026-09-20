let arr = [10,20,30,40,50]
let sec = 0 
let lar = 0 
for(let i=0;i<arr.length;i++){
    if(lar < arr[i]){
        sec = lar
        lar = arr[i]
        
    }
}
console.log(sec)