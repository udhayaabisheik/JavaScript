function gen(){
    var pat = /^[A-Za-z][A-Za-z0-9_]{4,29}$/;
    var get = document.getElementById("uname").value;
    if(pat.test(get)){
        alert("User Created")
    }else{
        alert("User Creation Unsuccessfull")
    }
}