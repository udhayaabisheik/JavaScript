class Shape{
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter(){
        console.log("Perimeter of " + this.name + " is " + this.sides * this.sideLength);
    } 
}

class Square extends Shape{
    constructor(name, sides, sideLength){
        super(name, sides, sideLength); 
        this.sideLength = 5;
    }
}

class Triangle extends Shape{
    constructor(name, sides, sideLength){
        super(name, sides, sideLength); 
        this.sideLength = 3;
    }
}
  
let squareObj = new Square('Square',4);
squareObj.calcPerimeter();

let triangleObj = new Triangle('Triangle',3);
triangleObj.calcPerimeter();