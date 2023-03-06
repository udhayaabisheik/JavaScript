class A {
    display(){
        console.log("A is invoked");
    }
}
class B extends A{
    display(){
        super.display();
        console.log("B is invoked");
    }
}
var b = new B();
b.display();