const person = {
    name: "Zodiac Hasbro",
    age: 56
};

//Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} yesars old.`;

console.log(greeting);

//chalenge

const result ={
    success:    ["max-length", "no-amd", "prefer-arrow-functions"],
    failure:    ["no-var", "var-on-top", "linebreak"],
    skipped:    ["id-blacklist", "no_dup-keys"]
};

function makeList(arr){
    const resultDisplayArray = [];
    for(let i = 0; i <arr.length;i++)
    {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}


const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//define template literal (easy method)

/*const creatPerson = (name, age, gender){
    return {
        name: name,
        age: age,
        gender: gender
    };
}*/

const creatPerson = (name, age, gender) => ({name, age, gender});

console.log(creatPerson("nam", "barsa", "linga"));