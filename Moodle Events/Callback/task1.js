isOdd = (num) => {
    if(num % 2 == 0){
        return false
    }else{
        return true
    }
}
call = () => {
    return isOdd(5)
}
console.log(call())