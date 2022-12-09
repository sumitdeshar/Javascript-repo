//destructuring of object
var voxel ={x : 3.6,
            y : 7.4,
            z : 6.5};

var x = voxel[x];
var y = voxel[y];//bracket method
var z = voxel.z;//dot method

const {x : a, y : b, z : c} = voxel;

//example

/*const AVG_TEMPERATUREs = {
    today : 39,
    tomorrow : 35 
};

function tempOfTomorrow(parameter_variable)
{
const {tomorrow : temperature} = parameter_variable;
return temperature;
}
console.log(tempOfTomorrow(AVG_TEMPERATUREs));*/

//nested destructuring of object

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getmaxtempOfTomorrow(temperature){
    const {tomorrow : {max : maxTempOfTomorrow}}=temperature;
    return maxTempOfTomorrow;
}
console.log(getmaxtempOfTomorrow(LOCAL_FORECAST));