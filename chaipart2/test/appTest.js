const assert = require('chai').assert;
const sayHello = require('../app').sayHello;

describe('App', function(){
    it('app should return hello', function() {
        assert.equal(sayHello(), 'hello');
    });


it('sayHello should return type string', function() {
    let result = sayHello();
    assert.typeOf(result, 'string');
});
});