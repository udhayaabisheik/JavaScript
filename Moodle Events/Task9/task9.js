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
    var c = '<option>select</option>';
    for(var j = 0; j <= x; j++){
        c += '<option>'+j+'</option>';
    }
    document.getElementById("opt1").innerHTML = c;
}