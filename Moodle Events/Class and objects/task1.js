class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    describe() {
      return this.name +"," + this.age + " years old";
    }
}
obj = new Person("John", 19);
console.log(obj.describe());