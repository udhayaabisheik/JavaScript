var employee = {
    ename : "Arun",
    developer : function() {
        console.log("Java Developer");
    },
    skills : ["HTML5","CSS3","Javascript","Java","MySQL"],
    salary : {
        DA : 20000,
        pf : 2000,
        netpay : 150000
    }
}

console.log(employee.developer());//passing a function as value
console.log(employee.skills[3])//using arrays and calling specific value
console.log(employee.skills)//using arrays and calling value
console.log(employee.salary)//including object inside object
console.log(employee.salary.netpay)//including object inside object and calling specific value