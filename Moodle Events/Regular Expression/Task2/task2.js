function create(){
    var input = document.getElementById("pass").value;
    var pat = /^[A-z0-9@#$]{8,16}$/;
    if(pat.test(input)){
        alert("Password Created")
    }else{
        alert("Requirements not statisfied")
    }
}