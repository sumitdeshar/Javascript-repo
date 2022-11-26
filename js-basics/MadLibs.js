function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective +" "+ myNoun+" " + myVerb + " to the ocean " + myAdverb;

    return result;
}

console.log(wordBlanks("dog", "lazy", "jumped", "quickly"));
console.log(wordBlanks("man", "kind", "drove", "slowly"));