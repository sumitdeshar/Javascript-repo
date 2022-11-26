
function comparsionfunction(testnum)
{
    if (testnum < 5)
        return "tiny";

    else if (testnum < 10)
        return "small"; 

    else if (testnum < 15)
        return "medium"; 

    else if (testnum < 20)
        return "large"; 

    else
        return "huge";
}

console.log(comparsionfunction(21))