//Voyel or Consonate

function stringCode(sentence){

    function isConsonante(char){
        const consonant = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
        return consonant.includes(char);
    }

    function countConsonantsAndVoels(word){
        let consonates = 0;
        let vowels = 0;

        for(const char of word){
            if(isConsonante(char)){
                consonates++;
            }
            else if("aeiouAEIOU".includes(char)){
                vowels++;
            }
        }

        return consonates + "" + vowels;
    }

    const words = sentence.split('');
    console.log(words);

    const consonatCount = words.map(word => countConsonantsAndVoels(word))

    return consonatCount;
}

console.log(stringCode('Happy Birthday To Me!'))