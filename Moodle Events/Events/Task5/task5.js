function empty(){
    var a = document.getElementById("pass").value;
    var b = document.getElementById("confirmpass").value;
    if((a.trim()).length == 0 || a == ''){
        a = document.getElementById("pass").focus();
    }else if((b.trim()).length == 0 || b == ''){
        b = document.getElementById("confirmpass").focus();
    }
    else if(a == b){
        alert("Password created successfully!");
    }else{
        alert("Password does not match");
    }
}