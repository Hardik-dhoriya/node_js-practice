let students = [
    { name: "A", marks: 70 },
    { name: "B", marks: 90 },
    { name: "C", marks: 80 }
];

for(let key in students){
    if(students[key].marks > 75){
        console.log(students[key].name)
    }
}