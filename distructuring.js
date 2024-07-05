//Distructuring

const person ={
    fName:'Jhon',
    lName:'Doe',
    age:20,
    city:'New York'
}

console.log(person.fName);

const {fName,lName,...age} = person;

console.log(fName);
console.log(lName);
// console.log(age);
console.log(left);