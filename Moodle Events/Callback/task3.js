duplicateChars = (str) => {
    return str.split("").map(char => char + char).join("");
}

console.log(duplicateChars('abc'))
