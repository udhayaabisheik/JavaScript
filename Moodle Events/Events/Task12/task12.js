function check(){
    var date = document.getElementById("date").value;
    var d = new Date(date);
    d.setDate(d.getDate()+5);
    var year  = d.getFullYear().toString();
    var month  = (d.getMonth()+1).toString();
    var dat  = d.getDate().toString();
    var aft = dat + "-" + month + "-" + year;
    document.getElementById("after").value = aft;
    var d1 = new Date(date)
    d1.setDate(d1.getDate()-5);
    var dat1 = d1.getDate().toString();
    var bef = dat1 + "-" + month + "-" + year;
    document.getElementById("before").value = bef;
}