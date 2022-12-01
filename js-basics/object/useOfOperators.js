//using rest operator

/*const sum = (function() {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
    console. log(sum(1, 2, 3));*/

    const sum = (function() {
        return function sum(...args) {
            return args.reduce((a, b) => a + b, 0);
        };
    })();
        console. log(sum(1, 2, 3));//sum(1, 2, 3,4,5,6);
    
    // spread operator
    
    /*const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;
    (function() {
        arr2 = arr1; // change this line
        arr1[0] = 'potato';
    })();
    
    console. log(arr2);*/
    
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;
    (function() {
        arr2 = arr1; // change this line
        arr1[0] = 'potato';
    })();
    
    console. log(arr2);