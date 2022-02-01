// Let's get started
// The app.js holds all the code that needs to be tested

var Thor = function(){
    this.powers = ['lightning', 'hammer', 'flight', 'speed'];
};

Thor.prototype.checkPowers= function() {
    let superhero = this.powers[Math.floor(Math.random() * this.powers.length)];

    console.log("Thor will use:", superhero)

    return superhero;
}

let thor = new Thor();

module.exports = thor;

// Here, we have Thor which can use any of the powers mentioned in the array
// The function checkPowers returns any random power from the array. Now we are going to test functionality of this function.
// Let's head on over to the app.js file in the test directory. (By default, Mocha will look for the test directory for test files)