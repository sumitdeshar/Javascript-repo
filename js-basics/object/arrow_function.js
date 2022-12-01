/* var magic = function() {
    return new Date();
};*/

const magic = () => new Date();

//with parameters

/*var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
};

console.log(myConcat([1,2], [3,4,5]));
*/

const myConcat = (arr1,arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));

//higher order arrow function

/*const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr;
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers) ;*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
                            //filtering above array to be +ve integer          //selecting the elements then squaring
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)

//next program
    const increment = (function() {
        return function increment(number, value = 1 ) {
            return number + value;
        };
    })();
        console. log(increment(5, 2));
        console. Log(increment(5));
        