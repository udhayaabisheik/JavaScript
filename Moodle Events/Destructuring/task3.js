obj = {
    firstName : "Udhaya",
    lastName : "abisheik",
    marks : 90,
    personal : {
        age : 22,
        gender : "Male"
    }
}

let {fisrtName,lastName,marks} = obj

console.log(obj.firstName,lastName,marks,obj['personal']['age'],obj['personal']['gender'])