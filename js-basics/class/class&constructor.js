/*var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)*/

class SpaceShuttle{
    constructor(targetplanet){
        this._targetplanet = targetplanet;// target planet is written instead of _targetplanet for convinence
    }                                      // same name can be used in this type of solution
};
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus._targetplanet)

//example

function makeClass(){
    class Vegetable{
        constructor(name){
            this.name = name; // same name can be used in this type of solution
        }
    }
    return Vegetable;
}

const yellow = makeClass(); // Vegetable is written instead of yellow for convinence
const carrot = new yellow("carrot");
console.log(carrot.name);

