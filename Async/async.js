async function display(){
    var response = await fetch('https://fakestoreapi.com/products')
    var datas = await response.json()
    var a = ''
    datas.map((j) => {
        a += '<li>My product id: ' + j.id + '</li>'
        a += '<li>My product name: ' + j.title + '</li>'
        a += '<li>My product price: ' + j.price + '</li>'
        a += '<li>My product count: ' + j.rating.count + '</li>'
    })
    document.getElementById("display").innerHTML = a
}