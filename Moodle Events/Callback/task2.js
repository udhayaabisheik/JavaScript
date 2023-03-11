exclaim = (name)=> {
    return name + '!'
}

console.log(exclaim('Adrian'))

console.log(exclaim(exclaim('Adrian')))