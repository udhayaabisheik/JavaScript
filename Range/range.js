var v = parseInt(prompt("Enter the number"));
if (v>0 && v<11 ) {
    alert("The given number is in the range of 1 to 10")
}
else if(v>10 && v<21){
    alert("The given number is in the range of 11 to 20")
}
else if(v>20 && v<31){
    alert("The given number is in the range of 21 to 30")
}
else if(v>30 && v<41){
    alert("The given number is in the range of 31 to 40")
}
else if(v>40 && v<51){
    alert("The given number is in the range of 41 to 50")
}
else{
    alert("The number is out of range")
}