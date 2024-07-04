// Looping

console.log("Using a for loop")

for(let i=1; i<=5;i++){
    console.log(i)
}

console.log("Using While Loop")

let i =1;
while(i<=5){
    console.log(i);
    i++;
}

console.log("Using a do-while loop")

let j = 1;
do{
    console.log(j);
    j++; 
}
while(j<=5)

//Function

function addNumbers(a,b){
    return a+b;
}

 //let sum = addNumbers(5,10);
 //console.log(sum);
console.log(addNumbers(5,10));

//Function pt2

function calculateAreaOfRectangle(width,heigth){
    return width*heigth;
}

let area = calculateAreaOfRectangle(5,10)
console.log("The area of rectangle is " + area)

//String Manupulation

let str = "Hello World";


function reverseString(str){
    return str.split("").reverse().join();
}

console.log(reverseString(str))

//Conditional

function checkEvenOrOdd(num){
    if(num % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(checkEvenOrOdd(121))

//Conditional pt2

let isLeapYear= (year) => {
    if((year % 4 === 0&& year % 100 !==0) || year % 400 === 0){
    return true;
    }

    else{
        return false;
    }
}

console.log(isLeapYear(2023))

//Arrays and Loops

let arr = [20,30,40,10,8];

 //console.log(arr[0]+arr[1])
let sum = 0;
for(let i=0; i< arr.length;i++){
    //console.log(arr.length)
    sum+=arr[i]
}

console.log(sum);

//Objects

let car ={
    make:"Toyota",
    model:"Camry",
    year:"2024"
}
car.startEgine = function(){
    console.log("Engine Started")
}

console.log(car.startEgine());

//Function and Scope

 //fact of 5 = 5 * 4 * 3 * 2 * 1 = 120
 //fact of 0 = 1
 //fact of 1 = 1

 function factorial(num) {
    if(num === 0 || num === 1){
        return 1;
    }
    else{
        let fact = 1;

        for(let i = 1; i<=num; i++){
            fact*=i; // fact = fact
        }
        return fact;
    }
 }

 console.log(factorial(5));

//Function and Scope pt2

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min +1))+min;
}

console.log(getRandomNumber(50, 100))

//Higher-Order Functions

let arrr = [10,15,20,25,30,35,40];

function fillterEvenNumber(arrr){
    return arrr.filter(num => num %2)
}

console.log(fillterEvenNumber(arrr));
console.log(arrr);

//Higher-Order Function pt2

function doubleArrayElements(array){
    return array.map((num)=> num * 2)
}

let arrrr = [10,20,40,50];
console.log(doubleArrayElements(arrrr));
console.log(arr);

//Array Methods

function findLargestElement(arrrrr){
    return arrrrr.reduce((max,current)=>{
        current > max ? current :max;
    })
}

let arrrrr=[1,2,10,20,10,5,1+6];
let reduce = findLargestElement(arrrrr);

console.log(reduce);


//Array Methods pt2

function removeElementFromArray(arrrrrr,target){
    return arrrrrr.filter(item => item !== target);
}

let arrrrrr = [10,10,20,10,30];
let target = 10;

let removed = removeElementFromArray(arrrrrr,target);

//Date and Time

function getCurrentDateAndTime(){
    let currentDate = new Date();
    return currentDate.toLocaleString();
}

console.log(getCurrentDateAndTime());

//Error Handling

    async function fetchData(){
        try{
    let response =await fetch("jsonplaceholder.org/posts");
    let data =await reponse.json();
    console.log(data);
    }
    catch(error){
       console.error("Error Fetching Data" +error);
    }
 }
 
  fetchData();

//Recursion

function factorial(n){
    if(n === 1){
        return 1;
    }

    else{
        return n*(factorial(n-1))
    }
}

console.log(factorial(5));
 // 5* factorial(5-1)
 // 4* factorial(4-1)
 // 3* factorial(3-1)
 // 2* factorial(2-1)
 // 1

//Recursion pt2

 //0 1 2 3 5 8 ... n
 //n  = 5
 // 5
 //n=6 (8)

function fibonacci(n){
    if(n<=1){
        return n;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

console.log(fibonacci(3));

 //fib(2)+fib(1)
 //fib(2)+1
 //1+1

//Closures

function createCounter(){
    let count = 0;
    return function(){
        return ++count;
    }
}

let counter = createCounter();

console.log(counter())
console.log(counter())
console.log(counter())

//Closures pt2

function  createCounterr(){
    //Private Variable
    let count=0;
     //Inner Function(closure)
    function increment(){
        count ++;
        console.log("Count :" ,count)
    }

    return{
        incrementCounterr:function(){
            increment();
        },

        getCount: function(){
            return count;
        }
    }
}

const couter = createCounterr();
couter.incrementCounterr();
couter.incrementCounterr();
console.log(couter.getCount())

//Prototypes

function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.calculateTotalValue = function(){
return this.price*this.quantity
}

const product1 = new Product("Widget",10,5);
const totalValue1 = product1.calculateTotalValue();

//product2
const product2 = new Product("Gadget",50,2);
const totalValue2 = product2.calculateTotalValue();

console.log(`Total Value of ${product1.name}: $${totalValue1}`)
console.log(`Total Value of ${product2.name}: $${totalValue2}`)

console.log(Product.prototype);

console.log(product1)

//Async Programing-Callbacks

/*function makeAPICall(url,callback){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err=> console.error("Error during Api Call:" ,err.message))
}

function handleData(data){
    console.log('Processed Data' ,data)
}

function main(){
    const apiUrl1 = 'jsonplaceholder.org/posts';
    const apiUrl2 = 'jsonplaceholder.org/posts';

    makeAPICall(apiUrl1,handleData);
    makeAPICall(apiUrl2,handleData);
}

main();*/

//Async Programming Promises

function makeAPICall (url){
    return fetch(url)
    .then(response =>  response.json())
    .catch(err=> console.error("Error during Api Call:" ,err.message))
}

function handleData(data){
    console.log('Processed Data',data);
}

function main(){
    const apiUrl1 = "jsonplaceholder.org/posts";
    const apiUrl2 = 'jsonplaceholder.org/posts'

    makeAPICall(apiUrl1).then(handleData).catch(err=>console.log('error'));
    makeAPICall(apiUrl2).then(handleData).catch(err=>console.log('error'));
}

// Async Programing Async/Await

async function fetchDataSecond(url){
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error("Request Failed With Status :" +response.status);         
        }
        return await(response.json())
    }
    catch(error){
        console.error("Error fetching data:", error)
    }
}

fetchData("jsonplaceholder.org/posts").then(data=>console.log(data));
