// Let's get started
// In your test folder, you will have a test file. This is where all of your unit testing will be held

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

});

// The describe methods takes in two arguments, a label describing what the test is about, and a function that will do all the testing.
// We use the 'it' method which takes in two parameters a label of the test and a function, that uses the methods of the assert module. 
// We are doing two tests, on for testing if the checkPowers() function returns a string using the isString method. The other test is testing if the power is returned using the oneOf method. 
// If you run 'npm test' in your console, you will see that both arguments pass.
