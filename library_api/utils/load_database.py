# Loads book information into the database
from models.book import Book

def load_database(iris_native):
    book_db = "^books"

    iris_native.kill(book_db)

    book_list = []
    with open('data/books.csv') as f:
        lines = f.readlines()

        for line in lines:
            book_list.append(line.strip('\n'))

    for i in range(1, len(book_list)):
        book = Book()
        book_info = book_list[i]
        book_info = book_info.split(',')
        book.title = book_info[0]
        book.author = book_info[1]
        book.publisher = book_info[2]
        book.page_count = book_info[3]
        book.pic_url = book_info[4]
        book.available = True


        iris_native.set(book.title, book_db, i, "title")
        iris_native.set(book.author, book_db, i, "author")
        iris_native.set(book.publisher, book_db, i, "publisher")
        iris_native.set(book.page_count, book_db, i, "page_count")
        iris_native.set(book.pic_url, book_db, i, "pic_url")
        iris_native.set(book.available, book_db, i, "available")

    print("Loaded books into database")