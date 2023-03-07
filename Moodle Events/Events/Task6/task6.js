function add(){
    var a = parseInt(document.getElementById("first").value);
    var b = parseInt(document.getElementById("second").value);
    document.getElementById("sp").innerHTML = "Addition : " + (a + b);
}
function sub(){
    a = parseInt(document.getElementById("first").value);
    b = parseInt(document.getElementById("second").value);
    document.getElementById("sp").innerHTML = "Subraction : " + (a - b);
}
function mul(){
    a = parseInt(document.getElementById("first").value);
    b = parseInt(document.getElementById("second").value);
    document.getElementById("sp").innerHTML = "Multiplication : " + (a * b);
}
function div(){
    a = parseInt(document.getElementById("first").value);
    b = parseInt(document.getElementById("second").value);
    document.getElementById("sp").innerHTML = "Division : " + (a / b);

}
function mod(){
    a = parseInt(document.getElementById("first").value);
    b = parseInt(document.getElementById("second").value);
    document.getElementById("sp").innerHTML = "Modules : " + (a % b);
}