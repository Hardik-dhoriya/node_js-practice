let students = [
    { name: "A", marks: 70 },
    { name: "B", marks: 90 },
    { name: "C", marks: 80 }
];
let low = students[0].marks
let student = students[0].name

for(let key in students){
    if(low > students[key].marks){
        low = students[key].marks 
        student = students[key].name
    }
}
console.log(student)