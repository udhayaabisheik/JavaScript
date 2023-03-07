function empty(){
    var a = document.getElementById("pass").value;
    var b = document.getElementById("confirmpass").value;
    if(a == '' || a == null){
        a = document.getElementById("pass").focus();
    }else if(b == '' || b == null){
        b = document.getElementById("confirmpass").focus();
    }
    else if(a == b){
        alert("Password created successfully!");
    }else{
        alert("Password does not match");
    }
}