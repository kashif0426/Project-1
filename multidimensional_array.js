function createMultidimensionalArray(rows,columns){
    let arr = [];
    
    for(let i =0;i<rows;i++){
        let row = [];
        // arr.push(new Array(columns));
        for(j=0;j<columns;j++){
            row.push(i+j);
            // arr[i][j]=i+j;
        }
        arr.push(row);
    }

    return arr;
}

function display(arr){
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i].join(" "));
    }
}

function reverseDisplay(arr){
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i].reverse().join(" "));
    }
}


const rows = 3;
const columns = 4;

const multiArray = createMultidimensionalArray(rows,columns);

console.log("Original Array");
display(multiArray);

console.log("Reverse Array");
reverseDisplay(multiArray);