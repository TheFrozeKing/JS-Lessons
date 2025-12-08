
//#region Part 4

const wordsToSort = ["киви","вокзальный","арбуз","банан","вокзал","ягода","вобла","булка"];

const bubbleSort = (wordArray = []) => {    
    const alphabet = "а б в г д е ё ж з и к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я".split(' ');
    const length = wordArray.length;

    const getLetterIndexes = (curElement, nextElement, letterToCheck) => {
        return [alphabet.indexOf(curElement[letterToCheck]), alphabet.indexOf(nextElement[letterToCheck])];
        //return [myIndexOf(alphabet, curElement[letterToCheck]), myIndexOf(alphabet,nextElement[letterToCheck])]
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