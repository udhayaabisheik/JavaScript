function Vehicle(err,vehicle1)
{
    this.vehicle1 = vehicle1;
    if(err)
    {
    console.log("You cannot create an instance of Abstract class");
}
}
Vehicle.prototype.display = function()
{
    return this.vehicle1;
}

var vehicle = new Vehicle();