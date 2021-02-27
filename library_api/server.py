# Connect to the database
from flask import Flask, request, Response
from pathlib import Path
from utils.load_database import load_database
from utils.connect_database import connect_database
from utils.search_database import get_all_books, get_book_by_params, get_book_by_id
from ruamel.yaml import YAML

import json

path = Path('settings.yaml')
yaml = YAML(typ='safe')
data = yaml.load(path)

app = Flask(__name__)
iris_native = connect_database()
load_database(iris_native)
book_db = data['database']
available = "available"

# Get all books
@app.route('/books', methods=['GET'])
def get_books():
    books = iris_native.iterator(book_db)
    books_to_return = []
    
    if request.args:
        books_to_return = get_book_by_params(iris_native, books, book_db, request.args)
    else:
        books_to_return = get_all_books(iris_native, books, book_db)

    return json.dumps([book.__dict__ for book in books_to_return])

# Check out a book
@app.route('/update/book/<id>/checkout', methods=['GET'])
def check_out_book(id):

    if get_book_by_id(iris_native, book_db, id):
        if iris_native.get(book_db, id, available):
            iris_native.set(False, book_db, id, available)
            return Response('Checked out book\n', status=200)
        return Response('Book already checked out\n', status=400)
    return Response('Unable to find book\n', status=400)

# Check in book
@app.route('/update/book/<id>/checkin', methods=['GET'])
def check_in_book(id):

    if get_book_by_id(iris_native, book_db, id):
        if not iris_native.get(book_db, id, available):
            iris_native.set(True, book_db, id, available)
            return Response('Checked in book\n', status=200)
        return Response('Book already checked in\n', status=400)
    return Response('Unable to find book\n', status=400)


if __name__ == '__main__':
    app.run()
