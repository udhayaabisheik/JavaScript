function val(){
    var phone = document.getElementById("num").value;
    var pat = /^[7-9]{1}[0-9]{9}$/;
    if(pat.test(phone)){
        alert("Mobile Number Valid")
    }else{
        alert("Mobile Number Invalid")
    }
}