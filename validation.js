//Regular Expression

const emailRegex = /^[a-zA-Z.]+@[a-zA-Z0-9.]+[a-zA-Z]{2,}$/

function validate(email){
    return emailRegex.test(email);
}

const email1 = "jhon@gmail.com";

console.log(validate(email1));