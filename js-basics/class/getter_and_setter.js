class Book{
    constructor(author){
        this._author = author;
    }

    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updatedAuthor){
        this._author=updatedAuthor;
    }
}
//example
function makeClass(){
    class ThermoStat{
        constructor(temp){
            this._temp = 5/9 * (temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedtemp){
            this._temp=updatedtemp;
        }
    }
    return ThermoStat;
}
const Thermostat = makeClass();
const thermo = new Thermostat(98.6);
let temp = thermo.temperature;

thermo.temperature = 26;
temp = thermo.temperature;
console.log(temp);