function javascript(){
    var a = document.createElement("div");
    var b = document.createTextNode("Login Page");
    var c = document.createElement("input");
    var d = document.createElement("button");
    var e = document.createTextNode("Click");
    d.append(e);
    a.append(b);
    a.append(c);
    a.append(d);
    var f = document.getElementById("bdy");
    f.append(a);
}