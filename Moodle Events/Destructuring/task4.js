obj = {
    firstName : "Udhaya",
    lastName : "abisheik",
    marks : () => {
        var m1 = 90
        var m2 = 90
        return m1 + m2
    }
}
console.log(obj['firstName'],obj['lastName'])
console.log(obj.marks())