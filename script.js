const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#status');

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
    title: title.textContent,
    author: author,
    pages: pages,
    read: read,
  };

  console.log(myLibrary);
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
  const section = document.querySelector('[data-section]');
  const formButton = document.querySelector('[data-button=open-form]');
  const formExitButton = document.querySelector('[data-button=close-form]');

  formButton.addEventListener('click', (e) => {
    section.classList.add('display');
  });

  formExitButton.addEventListener('click', (e) => {
    section.classList.remove('display');
  });
}

const submitButton = document.querySelector('[data-button=submit-form]');
submitButton.addEventListener('click', () => {
  addBookToLibrary();
});

displayForm();
displayBooks(myLibrary);
