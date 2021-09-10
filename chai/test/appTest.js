// Assert helps to determine the staus of the test, if it passes or fails
const assert = require('assert');
const sayHello = require('../app');

// The 'describe' function holds the collection of tests. 
describe("sayHello", function () {
    // 'it' is a function that tests itself
    it("Should return 'Hello Timmy'", function () {
        assert.equal("Hello Timmy", sayHello("Timmy"));
    });
});

