// 1s and 0

function textToNumber(str){
    const words = str.split(' ').filter(word => word.toLowerCase() === "zero" || word.toLowerCase() === "one");
    
    console.log(words);

    let binaryString = words.map(()=>{
        return words.toLowerCase()=== "one" ? "1" : "0"
    }).join(" ");

    const excessLength = binaryString.length % 8;

    if(excessLength!==0){
        binaryString = binaryString.slice(0,0);
    }

    return binaryString;

    
}

console.log(textToNumber("Zero one zero ONE zero one"));