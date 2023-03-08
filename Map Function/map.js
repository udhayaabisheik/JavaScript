const data = [
    {
        firstName : "John",
        "lastName" : "paul",
        age : 26
    },
    {
        firstName : "Ram",
        "lastName" : "kumar",
        age : "-"
    }
]

dispaly = () => {
    var a = ''
    data.map((value,index) => {
        a += '<li>My first name is : ' + value.firstName + '</li>'
        a += '<li>My last name is : ' + value.lastName + '</li>'
        a += '<li>My age is : ' + value.age + '</li>'
    })
    document.getElementById("display").innerHTML = a
}