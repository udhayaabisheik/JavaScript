function wrk(){
    var t1 = document.getElementById('s').value;
    document.getElementById('name').innerHTML = t1;
    var t2 = document.getElementById('r').value;
    document.getElementById('rno').innerHTML = t2;
    var t3 = document.getElementById('m1').value;
    document.getElementById('md1').innerHTML = t3;
    var t4 = document.getElementById('m2').value;
    document.getElementById('md2').innerHTML = t4;
    var t5 = Number(t3) + Number(t4);
    document.getElementById('tot').innerHTML = t5;
    var t6 = ( Number(t3) + Number(t4) ) / 2;
    document.getElementById('avg').innerHTML = t6;
    var t7;
    if (t3 > 40 && t4 > 40) {
        document.getElementById('res').innerHTML = "Pass";
    } else{
        document.getElementById('res').innerHTML = "Fail";
    }
    if (t5 > 180){
        t7 = "A";
        console.log(t7)
    } else if(t5 > 160){
        t7 = "B";
    } else if(t5 > 140){
        t7 = "C";
    } else if(t5 > 120){
        t7 = "D";
    }
    switch(t7)
    {
        case "A":
            document.getElementById('gr').innerHTML = "A";
        break;
        case "B":
            document.getElementById('gr').innerHTML = "B";
        break;
        case "C":
            document.getElementById('gr').innerHTML = "C";
        break;
        case "D":
            document.getElementById('gr').innerHTML = "D";
        break;
        default:
            document.getElementById('gr').innerHTML = "NA";
        break;
    }
}