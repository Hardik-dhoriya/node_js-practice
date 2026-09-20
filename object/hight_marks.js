let students = [
    { name: "A", marks: 70 },
    { name: "B", marks: 90 },
    { name: "C", marks: 80 }
];

let marks = 0;
let topper = ""
for(let key in students){
    if(marks < students[key].marks){
        marks = students[key].marks
        topper = students[key].name
    }
}
console.log(topper)