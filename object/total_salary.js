let employees = [
    { name: "A", salary: 30000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 35000 }
];

let total = 0 
for(let key in employees){
    total = total + employees[key].salary
}
console.log(`total salary => ${total}`)