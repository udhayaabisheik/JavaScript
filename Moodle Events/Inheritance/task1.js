class Person {
    constructor(name) {
        this.name = name
    }
}
  
class Teacher extends Person {
    constructor(name,subject) {
        super(name)
        this.subject = subject
    }
    teach() {
        console.log(this.name + " is teaching " + this.subject)
    }
}
let john = new Teacher("Diya","Computer Science")
john.teach()