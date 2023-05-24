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
            this.books.push(book);

            let ul = document.getElementById(`ul`);
            let li= book.render();
            ul.appendChild(li);
        }
        // let addButton = document.getElementById(`add`);

        // addButton.addEventListener(`click`, bookShelf.addNewBook);
  }
}
