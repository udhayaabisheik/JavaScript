class Employee {
    constructor(firstName, lastName) {
        this.firstname = firstName;
        this.lastName = lastName;
    }
}

Employee.prototype.company = "kgisl"; //using prototype

var employee1 = new Employee("Ravi","Kumar");
var employee2 = new Employee("Lakshmi","Priya");
console.log(employee1.firstname + " " + employee1.lastName + " " +  employee1.company + "\n");
console.log(employee2.firstname + " " + employee2.lastName + " " +  employee2.company + "\n");