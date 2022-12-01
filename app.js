// UI ojbect
const ui = new UI()
const ls = new LS()

//elemendid
const form = document.querySelector('form');
const booksList = document.querySelector('#book-list');


//events
form.addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', getBooks);
booksList.addEventListener('click', delBook);

function delBook(event){

    if(event.target.textContent === 'X'){
        const book = new Book()
        book.title = event.target.parentElement.parentElement.firstChild.nextSibling.textContent
        book.author = event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.textContent
        book.isbn = event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.textContent

        console.log(book)
        ui.delBook(book)

        ls.delBook(book)


    }
}

function getBooks(){
    let books = ls.getData('books')
    for(let i = 0; i < books.length; i++) {
        let book = books[i];
        ui.addBook(book)
    }
}

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book
    const book = new Book(title, author, isbn)
    //add book value to visual by UI object
    ui.addBook(book)
    //add book to LS
    ls.addBook(book)



    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}