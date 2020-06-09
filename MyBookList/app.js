// Book class: represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class: Handle UI tasks
class UI {
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const trBook = document.createElement('tr');
        trBook.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
        list.appendChild(trBook);
    }

    static deleteBook(targetDeleteBtn) {
        if (targetDeleteBtn.classList.contains('delete')) {
            targetDeleteBtn.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // vanish after 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearField() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store class: Handle storage
class Store {
    static getBooks() {
        let books = localStorage.getItem('books');
        books = books === null ? [] : JSON.parse(books);
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) books.splice(index, 1);
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const isbn = document.querySelector('#isbn').value.trim();

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('All fields are mandatory', 'danger');
        return;
    }

    book = new Book(title, author, isbn);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.showAlert('Book Added', 'success');
    UI.clearField();
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', function (e) {
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Book Removed', 'success');
});