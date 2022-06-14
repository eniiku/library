const myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Thompson',
    pages: '295 pages',
    read: 'not read yet',
  },
  {
    title: 'Ugly Love',
    author: 'Collen Hoover',
    pages: '314 pages',
    read: 'read',
  },
];

function Book(parameters) {
  (this.title = parameters.title),
    (this.author = parameters.author),
    (this.pages = parameters.pages),
    (this.read = parameters.read);
}

function addBookToLibrary() {
  const bookParameters = {
    title: prompt('Name of book?'),
    author: prompt('Who made book? '),
    pages: prompt('How many pages does book have? '),
    read: prompt('Have you read this book yet'),
  };

  const book = new Book(bookParameters);
  myLibrary.push(book);
}

function displayBooks(library = []) {
  const container = document.querySelector('[data-container]');
  container.innerHTML = library
    .map((book) => {
      return `
					<div class="card">
						<ul>
							<li>
									${book.title}
							</li>
							<li>
									${book.author}
							</li>
							<li>
									${book.pages}
							</li>
							<li>
									${book.read}
							</li>
						</ul>
					</div>
				`;
    })
    .join('');
}

function displayForm() {
  const formButton = document.querySelector('[data-button=form]');
  formButton.addEventListener('click', (e) => {
    const form = document.querySelector('[data-form]');
    form.setAttribute('style', 'display: flex;');
  });
}

displayForm();
displayBooks(myLibrary);
