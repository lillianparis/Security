const assert = require('chai').assert;
const Thor = require('../app');

describe('Thor test', function () {
    let thor = Thor;

    it('Check if the power has a valid name.', function () {
        assert.isString(thor.checkPowers(), 'string');
    })

    it('Check for a power in check powers', function () {
        let superhero = thor.checkPowers();
        assert.oneOf(superhero, thor.powers)
    });

    it('Make sure Thor can handle more villans', function() {
        for(var i=0; i<6; i++) {
            Thor.villansPresent();
            assert.isAtLeast(thor.villansPresent, 0)
        }
    })

});