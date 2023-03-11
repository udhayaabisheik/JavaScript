let swap = {
    x : 5,
    y : 10,
    z : 15
}

let {x:y,y:z,z:x} = swap

console.log(x)
console.log(y)
console.log(z)