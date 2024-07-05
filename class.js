class Book {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const book1 = new Book('Unexpected Power','Kashif SAYED',2024)

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

const ageOfBook1 = book1.getAge();

console.log(ageOfBook1);