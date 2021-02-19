# Connect to the database
from flask import Flask, request
from utils.load_database import load_database
from utils.connect_database import connect_database

app = Flask(__name__)
iris_native = connect_database()
load_database(iris_native)

# Get all books
@app.route('/books')
def get_all_books():
    book_iter = iris_native.iterator('^books')
    for key,value in book_iter.items():
        print(f'{key} : {value}')

    return 'test2'


# def initialize():
#     iris_native = connect_database()
#     load_database(iris_native)

#     return iris_native


if __name__ == '__main__':
    app.run()