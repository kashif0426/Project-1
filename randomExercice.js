//Random Exercice

//reverseODD("Apple") => elppA
//reverseODD("One Two Four") => enO owT Four

function reverseODD(str){
    function reverseString(str){
        return str.split('').reverse().join('');
    }

    const words = str.split('');
    console.log(words);
    for(let i=0; i<words.length; i++){
        if (words[i].length% 2!== 0){
            words[i] = reverseString(words[i]);
        }
    }

    return words.join(' ');
}

console.log(reverseODD("One Two Four"));