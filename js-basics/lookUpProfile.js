var contact = [
    {   "firstName" :   "Harry",
        "lastName"  :   "Potter",
        "number"    :   "4305789473",
        "likes"     :   ["Hogwarts", "Magic", "Hermoine"]
    },
    {   "firstName" :   "Hariry",
        "lastName"  :   "Putter",
        "number"    :   "5305789473",
        "likes"     :   ["Iogwarts", "Nagic", "Iermoine"]
    },
    {   "firstName" :   "Hairuy",
        "lastName"  :   "Polotterr",
        "number"    :   "6305789473",
        "likes"     :   ["Jogwarts", "Nagic", "Jermoine"]
    }
];

function lookUpProfile(name, prop){
    for (var i=0; contact.length; i++)
    {
        if(contact[i].firstName === name)
        {
            return contact[i][prop] || "No such property";
        }
    }
}

var data = lookUpProfile("Hariry", "likes");
console.log(data);