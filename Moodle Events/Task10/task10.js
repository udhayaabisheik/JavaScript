function add(){
    var a = document.getElementById("txt").value;
    var b = '<option>select</option>';
    for(var i = 0; i <= a; i++){
        b += '<option value = "'+i+'">'+i+'</option>';
    }
    document.getElementById("opt").innerHTML = b;
}

function select(){
    var x = document.getElementById("opt").value;
    var c = '<tr><td><input>Username</input><input>Password</input></td></tr>';
    for(var j = 1; j < x; j++){
        c += '<tr><td><input>Username</input><input>Password</input></td></tr>\n';
    }
    console.log(c)
    document.getElementById("tab").innerHTML = c;
}