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
        //let books = this.getData('books')
        let books = JSON.parse(window.localStorage.getItem('books'))


        for(let i = 0; i < books.length; i++){
            if(books[i].isbn === book.isbn){
                books[i].
            }
        }


        //books.forEach(function (){
            //if(book.isbn === books[2]){
               // console.log("t66tab")
           // }
       // })



        console.log(books.length)

        //if(book.isbn === books[1].isbn){
         //   console.log("tootab")
       //



    }


}