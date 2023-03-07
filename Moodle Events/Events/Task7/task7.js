function add(){
    var a = document.getElementById("txt").value;
    var b = '<option>select</option>';
    for(var i = 0; i <= a; i++){
        b += '<option value = "'+i+'">'+i+'</option>';
    }
    document.getElementById("opt").innerHTML=b;
}