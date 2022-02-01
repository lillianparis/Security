var Thor = function(){
    this.powers = ['lightning', 'hammer', 'flight', 'speed'];
    this.villans = 4;
};

Thor.prototype.checkPowers= function() {
    let superhero = this.powers[Math.floor(Math.random() * this.powers.length)];

    console.log("Thor will use:", superhero)

    return superhero;
};

Thor.prototype.villansPresent = function() {
    if(this.customers >= 1) {
        console.log("Villan conquered by Thor");
        this.villans--;
    }else if(this.villans ==0) {
        console.log("All villans have been conquered by Thor");
    }else{
        let villansLeft = this.villans;
        console.log("Villan conquered", villansLeft, "More to go!")
        this.villans-= villansLeft;
    }
    return this.villans; 
}

let thor = new Thor();

module.exports = thor;