function display(){
    const obj = [{
        firstname:'Udhaya',
        lastname:'abisheik',
        emailid:'abisheik@gmail.com',
        phoneno:'8746583929',
        password:'abi@123',
        Address:{
            AddressLine1:'101,North Street',
            AddressLine2:'Valliyur',
            city:'Tirunelveli',
            state:'Tamilnadu',
            country:'India',
            pincode:'627101'
        }
    },
    {
        firstname:'Sakthi',
        lastname:'ganesh',
        emailid:'saga@gmail.com',
        phoneno:'8392982799',
        password:'saga@123',
        Address:{
            AddressLine1:'80,North Street',
            AddressLine2:'Kovilpatti',
            city:'Thoothukudi',
            state:'Tamilnadu',
            country:'India',
            pincode:'641035'
        }
    }]
    
    var det = ''
    obj.map((value,index) => {
        det += '<tr>'
        det += '<td>'+ value.firstname + '</td>'
        det += '<td>'+ value.lastname + '</td>'
        det += '<td>'+ value.emailid + '</td>'
        det += '<td>'+ value.phoneno + '</td>'
        det += '<td>'+ value.password + '</td>'
        det += '<td>'+ value.Address.AddressLine1 + '</td>'
        det += '<td>'+ value.Address.AddressLine2 + '</td>'
        det += '<td>'+ value.Address.city + '</td>'
        det += '<td>'+ value.Address.state + '</td>'
        det += '<td>'+ value.Address.country + '</td>'
        det += '<td>'+ value.Address.pincode + '</td>'
        det += '</tr>'
    })
    document.getElementById("table").innerHTML = det
}