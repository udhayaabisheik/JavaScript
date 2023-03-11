async function display(){
    var response = await fetch('https://fakestoreapi.com/products')
    var datas = await response.json()
    var a = ''
    datas.map((value,index) => {
        a += '<li>My product id: ' + value.id + '</li>'
        a += '<li>My product name: ' + value.title + '</li>'
        a += '<li>My product price: ' + value.price + '</li>'
        a += '<li>My product count: ' + value.rating.count + '</li>'
    })
    document.getElementById("display").innerHTML = a
    
}