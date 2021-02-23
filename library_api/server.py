# Connect to the database
from flask import Flask, request, Response
import json
from utils.load_database import load_database
from utils.connect_database import connect_database
from utils.search_database import get_all_books, get_book_by_params, get_book_by_id
from ruamel.yaml import YAML
from pathlib import Path

path = Path('settings.yaml')
yaml = YAML(typ='safe')
data = yaml.load(path)
app = Flask(__name__)
iris_native = connect_database()
load_database(iris_native)
book_db = data['database']

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

# Update book by id
@app.route('/update/book/<id>', methods=['POST'])
def update_book(id):
    field = "available"

    # This outer conditional does not work as intended, will set values
    # on books that don't exist
    if get_book_by_id(iris_native, book_db, id):
        if iris_native.get(book_db, id, field):
            iris_native.set(False, book_db, id, field)
        else:
            iris_native.set(True, book_db, id, field)
        return Response('Changed book availablitiy', status=200)

    return Response('Unable to find book', status=404)
    

if __name__ == '__main__':
    app.run()
