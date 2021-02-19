# Connect to the database
from flask import Flask, request
import json
from utils.load_database import load_database
from utils.connect_database import connect_database
from models.book import Book

app = Flask(__name__)
iris_native = connect_database()
load_database(iris_native)





# Get all books
@app.route('/books')
def get_all_books():
    book_db = "^books"
    books = iris_native.iterator(book_db)
    books_to_return = []
    for k, _ in books:
        book = Book()
        book.title = iris_native.get(book_db, k, "title")
        book.author = iris_native.get(book_db, k, "author")
        book.publisher = iris_native.get(book_db, k, "publisher")
        book.page_count = iris_native.get(book_db, k, "page_count")
        book.pic_url = iris_native.get(book_db, k, "pic_url")

        books_to_return.append(book)

    return json.dumps([book.__dict__ for book in books_to_return])


# Get book by id


if __name__ == '__main__':
    app.run()