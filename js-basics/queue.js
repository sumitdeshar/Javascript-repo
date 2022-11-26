var testArr = [1,2,3,4,5,6]

function nextInLine(arr,item)
{
    arr.push(item);

    return arr.shift();
}

console. log("Before: " + JSON.stringify(testArr));
console. log(nextInLine(testArr, 7));
console. log("After: " + JSON.stringify(testArr));

