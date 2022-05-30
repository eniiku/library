let myLibrary = [];

function addBookToLibray() {
  const book = {
    title: prompt('What is the name of your book? '),
    author: `by ${ prompt('Who is the author of this book? ') }`,
    pages: prompt('How many pages does this book have? '),
    read: prompt('Have you read this book? '),
  };
  myLibrary.push(book);
}
addBookToLibray();
console.log(myLibrary);