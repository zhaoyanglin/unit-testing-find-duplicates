exports.duplicates = (words) => {
    let lowerCaseWord = words.toLowerCase();
    let newString = "";
    for (let i = 0; i < lowerCaseWord.length; i++) {
        if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
            newString += "(";
        } else {
            newString += ")";
        }
    }
    return newString;
};



