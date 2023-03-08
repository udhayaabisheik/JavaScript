let options = {
    title : "Menu",
    height : 200,
    width : 100
}

let {title,...r} = options

console.log(r.height)
console.log(r.width)