const student = {
    firstName: 'Monica',
    get name(){
        return this.firstName
    },
    set(){
        return this.firstName = "Sara"
    }
}

console.log(student.name)
console.log(student.set())