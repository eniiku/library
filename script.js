const myLibrary = []

function Book(parameters) {
	this.title = parameters.title,
	this.author = parameters.author,
	this.pages = parameters.pages,
	this.read = parameters.read
}

function addBookToLibrary() {
		const bookParameters = {
				title: prompt('Name of book?'),
				author: prompt('Who made book? '),
				pages: prompt('How many pages does book have? '),
				read: prompt('Have you read this book yet')
		}
	
		const book = new Book(bookParameters);
		myLibrary.push(book);
}