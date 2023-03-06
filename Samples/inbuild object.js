class Moments extends Date{
    constructor(){
        super();
    }
}
var n = new Moments(`August 15,1947 20:12:10`);
console.log(`Current date:${n.getDate()}-${n.getMonth() + 1}-${n.getFullYear()}`);

class Moment extends Date{
    constructor(year){
        super(year);
    }
}
var m = new Moment(`August 15,1947 20:12:10`);
console.log(`Year value:${m.getFullYear()}`);