//Propotype Inheritence

const person = {
    name: "Kashif",
    age:"12",

    introduce:function(){
        return `Hi my name is ${this.name} and I am ${this.age}`;
    }
}

const student = Object.create(person);
student.studentId = "1234657";

console.log(student.name);
console.log(student.studentId);

console.log(person.studentId);