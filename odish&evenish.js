// Odish and Evenish

//oddOrEven(121) = 1+2+1 = 4 //Even
//oddOrEven(41) = 4+1 = 5 //Odd

function oddishOrEvenish(num){
    const digits = num.toString().split('').map(Number);
    console.log(digits);

    const sum = digits.reduce((acc,digit) => acc+digit,0);

    return sum % 2 === 0? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(41));