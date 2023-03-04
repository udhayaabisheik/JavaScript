function add()
{
    var name = document.getElementById("name").value;
    var rollno = document.getElementById("roll_no").value;
    var tamil = parseInt(document.getElementById("t_mark").value);
    var english = parseInt(document.getElementById("e_mark").value);
    var maths = parseInt(document.getElementById("m_mark").value);
    var science = parseInt(document.getElementById("s_mark").value);
    var social = parseInt(document.getElementById("ss_mark").value);
    if(name != "" && rollno != "" && tamil != "" && english != "" && maths != "" && science != "" && social != ""){
        var total = tamil + english + maths + science + social;
        var average = total / 5;
        var grade = null;
        if ( ( tamil >= 40 ) && ( english >= 40 )  && ( maths >= 40 )  && ( science >= 40 )  && ( social >= 40 ) ){
            grade = "Pass";
        }
        else{
            grade = "Fail";
        }
        insert(name,rollno,tamil,english,maths,science,social,total,average,grade);
    }
    else{
        alert("Enter all the fields");
    }
}

function cls(){
    document.getElementById("name").value=null;
    document.getElementById("roll_no").value=null;
    document.getElementById("t_mark").value=null;
    document.getElementById("e_mark").value=null;
    document.getElementById("m_mark").value=null;
    document.getElementById("s_mark").value=null;
    document.getElementById("ss_mark").value=null;
}

function insert(name,rollno,tamil,english,maths,science,social,total,average,grade){
    let table = document.getElementById("MyData");
    let row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    
    cell1.innerHTML = name;
    cell2.innerHTML = rollno;
    cell3.innerHTML = tamil;
    cell4.innerHTML = english;
    cell5.innerHTML = maths;
    cell6.innerHTML = science;
    cell7.innerHTML = social;
    cell8.innerHTML = total;
    cell9.innerHTML = average;
    cell10.innerHTML = grade;
}
