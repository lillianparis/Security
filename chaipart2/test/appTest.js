const assert = require('chai').assert;
const sayHello = require('../app').sayHello;

describe('App', function(){
    it('app should return hello', function() {
        assert.equal(sayHello(), 'hello');
    });
});