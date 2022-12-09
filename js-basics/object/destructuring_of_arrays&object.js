/*const [z,x] = [1,2,3,4,5,6];
console.log(z,x);*/

const [z,x,,y] = [1,2,3,4,5,6];
console.log(z,x,y);

let a = 8, b = 6;
(()=>{
    "use strictly";
    [a,b] = [b,a];//swaping a and b
})();
console.log(a);
console.log(b);

//using rest operator
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
    const [ , , ...arr] = list; // [a,b, ...arr] = list means a=1 b=2 and rest load on list
    return arr;
}

//Object as function parameter

const stats = {
    max: 56.78,
    standard_deviatoin: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function(){
    return function half({max, min}){ // avoid passing stats wholly when some info are only getting used
        return (max + min)/ 2.0;
    };
})();