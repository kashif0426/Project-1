//return "BOOM"

function sevenBoom(arr){
    for(const num of arr){
        if(num.toString().includes("7")){
            return "BOOM!";
        }
    }

    return "There is no seven in this ARRAY";
}

console.log(sevenBoom([1,2,3,4,5,6]));
