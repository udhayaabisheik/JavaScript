class Manager{
    constructor(){
        this.mname = "Manoj";
    }
}
class Employee extends Manager{
    constructor(){
        super();
        this.id = 101;
        this.name = "Rithivik";
    }
}
var emp = new Employee();
console.log("Employee ID : " + emp.id + "\nEmployee Name : " + emp.name + "\nManager : " + emp.mname);
console.log(typeof(emp));