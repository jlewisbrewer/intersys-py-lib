from models.book import Book

# Associates a book in the DB with a book type
def initialize_book(iris_native, book_db, id):
    book = Book()
    book.id = id
    book.title = iris_native.get(book_db, id, "title")
    book.author = iris_native.get(book_db, id, "author")
    book.publisher = iris_native.get(book_db, id, "publisher")
    book.page_count = iris_native.get(book_db, id, "page_count")
    book.pic_url = iris_native.get(book_db, id, "pic_url")

    return book

def get_all_books(iris_native, books, book_db):
    res = []
    for k, _ in books:
        book = initialize_book(iris_native, book_db, k)
        res.append(book)

    return res


def get_specific_book(iris_native, books, book_db, args):
    res = []

    # Return if searching for one book
    if "id" in args:
        id = args["id"]
        res.append(initialize_book(iris_native, book_db, id))
        return res
    
    ids = []

    for item in args.keys():
        print(item)

    print(iris_native.get(book_db, 5))
    for k, _ in books:
        # Need to match all of them
        l = len(args)
        count = 0
        for item in args.keys():
            # Need try catch here
            if args[item] == iris_native.get(book_db, k, item):
                count += 1
        if count == l:
            ids.append(k)             
    
    
    for id in ids:
        res.append(initialize_book(iris_native, book_db, id))
    
    return res
    



