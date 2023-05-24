const shelf = document.querySelector('#shelf');
const bookShelf = new Bookshelf();
let addButton = document.getElementById(`add`);
addButton.addEventListener(`click`, bookShelf.addNewBook)

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookShelf.addBook(book);
}

shelf.append(bookShelf.render());