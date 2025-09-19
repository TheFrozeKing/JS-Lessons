
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
