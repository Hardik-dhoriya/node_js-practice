let employees = [
    { name: "A", salary: 30000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 35000 }
];

for(let key in employees){
    if(employees[key].salary < 30000){
        console.log(employees[key].name)
    }
}