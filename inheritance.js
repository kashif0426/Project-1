//inheritence & prototype

class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Magazine extends Book{
    constructor(title,author,year,issue){
        super(title,author,year);
        this.issue = issue;
    }

    getIssueNumber(){
        return this.issue;
    }
}

const myMagazine = new Magazine('up','ks',2024,56709599);

console.log(myMagazine.title);
console.log(myMagazine.getIssueNumber());