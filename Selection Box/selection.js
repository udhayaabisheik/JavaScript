function add(){
    var a = document.getElementById("opt")
    var b = document.createElement("option");
    var c = document.getElementById("txt").value;
    var d = document.createTextNode(c);
    b.append(d);
    a.append(b);
}