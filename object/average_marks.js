let students = [
    { name: "A", marks: 70 },
    { name: "B", marks: 90 },
    { name: "C", marks: 80 }
];

let sum = 0
let count = 0

for(let key in students){
    sum = sum + students[key].marks
    count++
}
let avg = sum / count

console.log(avg)