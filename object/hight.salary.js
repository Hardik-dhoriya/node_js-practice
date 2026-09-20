let employees = [
    { name: "A", salary: 30000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 35000 }
];

let hig = employees[0].salary
let hig_name = employees[0].name

for(let key in employees){
    if(hig < employees[key].salary){
        hig = employees[key].salary
        hig_name = employees[key].name
    }
}
console.log(hig_name)