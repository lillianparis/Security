const Car = function(){
    this.types = ['Jeep', 'Mazda', 'Hyundai', 'Mini'];
};
Car.prototype.checkGarage= function(){
    //returns a string
    //returns a random car from the cars array
    let type = this.types[Math.floor(Math.random() * this.types.length)];

    console.log("I will like to have:", car);
    return type;
};

let car = new Car();

module.exports = car;