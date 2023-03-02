let person = {
    firstname : "Udhaya",
    lastname : "abisheik",
    age : 22,
    city : "Tirunelveli",
    "1" : "one",
    "my choice" : "Developer"
}
console.log(person.firstname,person.lastname);//dot notation
console.log(person["1"]);//bracket notaion
console.log(person["my choice"]);

//variable as key

var a = "firstname";
var b = "age";
console.log(person[a]);
console.log(person[b]);
console.log(person.a);//dot does not work here

//object destructuring

let {city,gender} = person;
console.log(city);
console.log(gender);

//modifing value of object

person.age = 23;
console.log(person.age);
person.lastname = "kumar";
console.log(person["lastname"]);

//adding a property using dot and bracket notation

person.qualification = "MCA";
person["year"] = 2023;
console.log(person);