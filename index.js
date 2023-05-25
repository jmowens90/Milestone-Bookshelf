const shelf = document.getElementById('shelf');
const bookShelf = new Bookshelf();
let addButton = document.getElementById(`add`);
addButton.addEventListener(`click`, bookShelf.addNewBook)


for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookShelf.addBook(book);
}
console.log(bookShelf)
shelf.append(bookShelf.render());