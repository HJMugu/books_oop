class LS {



    //help functions get and set from ls
    getData(name){
        let data;
        if(localStorage.getItem(name) === null){
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem(name));
        }
        return data
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data));
    }


    addBook(book){
        let books = this.getData('books')
        books.push(book);
        this.setData('books', books);
    }

    delBook(book){

        let books = JSON.parse(localStorage.getItem('books'))

        books.forEach(function(bookFromLS, index){
            if(book.isbn === bookFromLS.isbn){
                books.splice(index, 1)
            }
        })


        localStorage.setItem('books', JSON.stringify(books))
        console.log(books.length)



    }


}