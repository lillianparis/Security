const assert = require('assert');
const Car = require('../app');

describe('Car test', function(){
   
    let car = Car;
    
    it('check if the car has valid name.', function(){
        assert.isString(car.checkGarage(), 'string');
    })
    
    it('check for a car at the dealership.', function (){
        let type= car.checkGarage()
        assert.oneOf(type, car.types)

    });
    
});