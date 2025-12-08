//#region Part 1
const getLength = (str) => {

    let i = 0;
    while (i < Infinity) { // дорого
        if (str[i] === undefined) {
            break;
        }
        i++;
    }

    return i;
}

const myIndexOf = (str, char) => { // дорого
    let length = getLength(str);
    for (let i = 0; i < length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

const myLastIndexOf = (str, char) => {
    let length = getLength(str);
    for (let i = length - 1; i >= 0; i--) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

const myAllIndexOf = (str, char) => {
    let length = getLength(str);
    let indexes = [];
    for (let i = 0; i < length; i++) {
        if (str[i] === char) {
            indexes.push(i);
        }
    }
    return getLength(indexes) > 0 ? indexes : -1;
}

const mySlice = (string, start, end) => {
    let newString = '';
    let length = getLength(string);

    if(start < 0){
        start = length + start;
    }

    if(end < 0){
        end = length + end;
    }

    if(end === undefined){
        for (let i = start; i < length; i++) {
            newString += string[i];
        }
    }
    else{
        for (let i = start; i < end; i++) {
            newString += string[i];
        }
    }
    return newString;
}
//#endregion

//#region Part 2 

const mySplit = (str, separator) => {
    let strSeparated = [];
    const length = getLength(str);
    let isSeparatorEmpty = separator === undefined || separator === '';
    let accumulator = '';

    for(let i = 0; i < length; i++){
        if(isSeparatorEmpty){
            strSeparated.push(str[i]);
        }
        else{
            if(str[i] === separator){
                strSeparated.push(accumulator);
                accumulator = '';
                continue;
            }
            accumulator += str[i];
        }  
    }
    if(getLength(accumulator) > 0){
        strSeparated.push(accumulator);
        accumulator = '';
    }

    return strSeparated;
}

const myReverse = array => {
    const length = array.length;
    let reversed = [];
    for(let i = length-1; i >= 0; i--){
        reversed.push(array[i]);
    }
    return reversed;
}

const myJoin = (array, separator) => {
    let isSeparatorEmpty = separator === undefined || separator === '';
    const length = getLength(array);
    let strJoined = '';

    for(let i = 0; i < length; i++){
        strJoined += array[i];
        if(!isSeparatorEmpty && i < length - 1){
            strJoined += separator;
        }
    }
    return String(strJoined);    
}

const myToLowerCase = str => {
    const russianUpperMap = {
        'А' : "а",
        'Б' : "б",
        'В' : "в",
        'Г' : "г",
        'Д' : "д",
        'Е' : "е",
        'Ё' : "ё",
        'Ж' : "ж",
        'З' : "з",
        'И' : "и",
        'Й' : "й",
        'К' : "к",
        'Л' : "л",
        'М' : "м",
        'Н' : "н",
        'О' : "о",
        'П' : "п",
        'Р' : "р",
        'С' : "с",
        'Т' : "т",
        'У' : "у",
        'Ф' : "ф",
        'Х' : "х",
        'Ц' : "ц",
        'Ч' : "ч",
        'Ш' : "ш",
        'Щ' : "щ",
        'Ъ' : "ъ",
        'Ы' : "ы",
        'Ь' : "ь",
        'Э' : "э",
        'Ю' : "ю",
        'Я' : "я"
    };
    const englishUpperMap =     {
        'A' : "a",
        'B' : "b",
        'C' : "c",
        'D' : "d",
        'E' : "e",
        'F' : "f",
        'G' : "g",
        'H' : "h",
        'I' : "i",
        'J' : "j",
        'K' : "k",
        'L' : "l",
        'M' : "m",
        'N' : "n",
        'O' : "o",
        'P' : "p",
        'Q' : "q",
        'R' : "r",
        'S' : "s",
        'T' : "t",
        'U' : "u",
        'V' : "v",
        'W' : "w",
        'X' : "x",
        'Y' : "y",
        'Z' : "z"
    };

    const length = getLength(str);
    let newStr = '';

    for(let i = 0; i < length; i++){
        if(russianUpperMap[str[i]] !== undefined){
            newStr += russianUpperMap[str[i]];
        }
        else if(englishUpperMap[str[i]] !== undefined){
            newStr += englishUpperMap[str[i]];
        }
        else{
            newStr += str[i];
        }
    }

    return newStr;
}

const myIsPalindrome = str => {
    let reversedStr = '';

    const splitStr = mySplit(str);
    
    const reversedArrayStr = myReverse(splitStr);
    const firstJoined = myJoin(reversedArrayStr);
    const secondSplit = mySplit(firstJoined,' ');
    reversedStr = myJoin(secondSplit);
    
    let strToCompare = myJoin(splitStr);
    strToCompare = mySplit(strToCompare, ' ');
    strToCompare = myJoin(strToCompare);

    return myToLowerCase(strToCompare) === myToLowerCase(reversedStr);
}

// myReplace("Добро Москву пожаловать в Москву, Москву","Москву", "1") 
const myReplace = (str, search, replacement) =>{
    const length = getLength(str);
    const searchLength = getLength(search);

    let currentLettersMatched = 0;
    let startIndex = -1;
    let endIndex = -1;

    let startIndexes = [];
    let endIndexes = [];

    for(let i = 0; i <= length; i++){
        if(currentLettersMatched >= searchLength){
            endIndex = i;
            startIndexes.push(startIndex);
            endIndexes.push(endIndex);
            currentLettersMatched = 0;
        }        
        
        if(str[i] === search[currentLettersMatched]){
            startIndex = currentLettersMatched === 0 ? i : startIndex;
            currentLettersMatched++;
        }
        else{
            startIndex = -1;
            currentLettersMatched = 0;
        }
    }

    let replaceAmount = getLength(startIndexes);
    let finishedStr = '';
    let splices = [];

    if(replaceAmount <= 0){
        return str;
    }

    for(let i = 0; i < replaceAmount; i++){
        let previousEndIndex = endIndexes[i - 1] === undefined ? 0 : endIndexes[i-1];
        splices.push(mySlice(str, previousEndIndex, startIndexes[i]));
    }

    for(let i = 0; i < replaceAmount; i++){
        finishedStr += splices[i];
        finishedStr += replacement;
    }

    return finishedStr;
}

 //#endregion

//#region Part 3
const customPush = (array, element) =>{
    array[array.length] = element;
}

const customPop = array => {
    const lastElement = array[array.length - 1];
    array.length = array.length-1;
    return lastElement;
}

const customShift = array => {
    const firstElement = array[0];

    for(let i = 0; i < array.length; i++){
        array[i] = array[i+1];    
    }
    array.length = array.length-1;
    return firstElement;
}

const customUnshift = (array, element) => {
    let length = array.length;

    for(let i = length; i >= 0; i--){
        array[i+1] = array[i];    
    }
    array[0] = element;
    array.length = array.length - 1;
}



const customSplice = (array, startIndex, deleteCount, ...items) =>{
    const newArray = [];
    const deletedItemsArray = [];
    let hasAddedItems = false;
    
    for(let i = 0; i < array.length; i++){
        if(i < startIndex || i >= startIndex + deleteCount){
            customPush(newArray, array[i]);
        }
        else{
            customPush(deletedItemsArray,array[i]);
            if(!hasAddedItems){
                hasAddedItems = true;
                for(let j = 0; j < items.length; j++){
                    customPush(newArray,items[j]);
                }
            }
        }
    }

    console.log(`newArray = ${newArray}`);
    //array = newArray; не работает
    //array = [...newArray]; не работает

    // КОСТЫЛЬ ДЛЯ ЗАМЕНЫ МАССИВА
    array.length = 0; 
    for(let i = 0; i < newArray.length; i++){
        array[i] = newArray[i];
    }

    
    return deletedItemsArray;
}

/*
let testArray = ['a','b','c','d'];
console.log(customPush(testArray,'e'));
console.log(testArray);

console.log(' ');

let testArray2 = ['a','b','c','d'];
console.log(customPop(testArray2));
console.log(testArray2);

console.log(' ');

let testArray3 = ['a','b','c','d'];
console.log(customShift(testArray3));
console.log(testArray3);

console.log(' ');

let testArray4 = ['a','b','c','d'];
console.log(customUnshift(testArray4,'e'));
console.log(testArray4);

console.log(' ');

let testArray5 = ['a','b','c','d'];
console.log(customSplice(testArray5,2,2));
console.log(testArray5);
*/

//#endregion

//#region Part 4

const wordsToSort = ["киви","вокзальный","арбуз","банан","вокзал","ягода","вобла","булка"];

const bubbleSort = (wordArray = []) => {    
    const alphabet = mySplit("а б в г д е ё ж з и к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я", " ");
    const length = getLength(wordArray);

    const getLetterIndexes = (curElement, nextElement, letterToCheck) => {
        return [myIndexOf(alphabet, curElement[letterToCheck]), myIndexOf(alphabet,nextElement[letterToCheck])]
    }

    for(let i = 0; i < length; i++){                
        for(let j = 0; j < length-1; j++){            

            const currentElement = wordArray[j];
            const nextElement = wordArray[j+1];

            let startIndex = 0;
            let hasSwitched = false;

            while(hasSwitched === false)
            {
                let indexes = getLetterIndexes(currentElement, nextElement, startIndex);

                if(indexes[0] < indexes[1]){
                    hasSwitched = true;
                    break;
                }
                else if(indexes[0] > indexes[1]){
                    wordArray[j] = nextElement;
                    wordArray[j+1] = currentElement;
                    hasSwitched = true;
                    break;
                }
                else if(indexes[0] === indexes[1])
                {
                    startIndex++;
                }
            }

        }
    }

    return wordArray;

}


//#endregion