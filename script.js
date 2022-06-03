let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pages: '295 pages',
    status: 'not reed yet',
  },

];

function addBookToLibray() {
  const book = {
    title: prompt('What is the name of your book? '),
    author: `by ${ prompt('Who is the author of this book? ') }`,
    pages: prompt('How many pages does this book have? '),
    status: prompt('Have you read this book? '),
  };
  myLibrary.push(book);
}
addBookToLibray();
console.log(myLibrary);