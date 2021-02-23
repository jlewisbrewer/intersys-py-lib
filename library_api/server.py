# Connect to the database
from flask import Flask, request
import json
from utils.load_database import load_database
from utils.connect_database import connect_database
from utils.search_database import get_all_books, get_book_by_params
from models.book import Book

app = Flask(__name__)
iris_native = connect_database()
load_database(iris_native)

# Get all books
@app.route('/books', methods=['GET'])
def get_books():
    book_db = "^books"
    books = iris_native.iterator(book_db)
    books_to_return = []
    
    print(request.args)
    if request.args:
        books_to_return = get_book_by_params(iris_native, books, book_db, request.args)
    else:
        books_to_return = get_all_books(iris_native, books, book_db)

    return json.dumps([book.__dict__ for book in books_to_return])


if __name__ == '__main__':
    app.run()
