class Bookshelf {
    constructor(books = []) {
      this.books = books;
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    render() {
      const ul = document.createElement("ul");
      ul.id = `ul`;
  
      for (const book of this.books) {
        ul.append(book.render());
      }
  
      return ul;
    }

     addNewBook() {
        let author = document.getElementById(`author`).value;
        let language = document.getElementById(`language`).value;
        let subject = document.getElementById(`subject`).value;
        let title = document.getElementById(`title`).value;
    
        if (author || language || subject || title) {
            let book = new Book(author, language, subject, title);
            //this.books.push(book); //--> literally kept getting an error that this.books was undefined, took me
            //well over a few hours until I found an article that briefly mentioned that I didn't need to push 
            // the book if I was trying to add it to an already existing array(i guess the append function takes
            //care of that?). I honestly don't know why this works going to ask for some clarification on that.

            let ul = document.getElementById(`ul`);
            let li= book.render();
            ul.appendChild(li);
            // check local storage on mdn to see about keeping the new books added to the database\

            document.getElementById(`author`).value = ``;
            document.getElementById(`language`).value = ``;
            document.getElementById(`subject`).value = ``;
            document.getElementById(`title`).value = ``;
        }
    }
}
