function groupByDepartment(employees){
    let HR=employees.filter(el=>el.department==="HR").sort((a,b)=>b.salary-a.salary)
    let Finance=employees.filter(el=>el.department==="Finance").sort((a,b)=>b.salary-a.salary)
    let IT=employees.filter(el=>el.department==="IT").sort((a,b)=>b.salary-a.salary)
    return{
        HR,
        Finance,
        IT
    }
}



const employees = [
    { name: "Alice", age: 30, salary: 50000, department: "HR" },
    { name: "Bob", age: 35, salary: 60000, department: "Finance" },
    { name: "Charlie", age: 28, salary: 55000, department: "HR" },
    { name: "David", age: 40, salary: 70000, department: "IT" },
    { name: "Eve", age: 32, salary: 65000, department: "Finance" },
  ];
  
console.log(groupByDepartment(employees));
  
  