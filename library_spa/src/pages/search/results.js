import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/book-context";

function Search() {
  const { books } = useContext(BookContext);
  const [selectedBook, setSelectedBook] = useState(null);
  console.log(books);
  const numResults = books.length;
  const baseUrl = "http://localhost:5000/update/book/";

  async function changeBookAvail(book, avail) {
    let url = baseUrl
    if (avail === "in") {
      url = url + book.id + "/checkin";
    } else if (avail == "out") {
      url = url + book.id + "/checkout";
    }
    const res = await fetch(url, {
      method: "GET",
    });
    console.log(res);
    setSelectedBook(book)
    console.log(selectedBook);
    
  }

  const checkOutBook = (book) => (e) => {
    console.log("checking out book..." + book.id);
    return changeBookAvail(book, "out");
  };

  const checkInBook = (book) => (e) => {
    console.log("checking in book...");
    return changeBookAvail(book, "in");
  };

  console.log(books.length);
  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Your search yielded {numResults} result(s):</h1>
      </div>
      <div>
        <ul>
          {books.map(function (book, i) {
            return (
              <li>
                <div className="book-card">
                  <div className="book-card-info">
                    <img
                      className="book-card-image"
                      alt="cover art of book"
                      src={book.pic_url}
                    />
                    <div className="book-card-text">
                      <p className="book-card-text-info">Title: {book.title}</p>
                      <p className="book-card-text-info">
                        {" "}
                        Author: {book.author}
                      </p>
                      <p className="book-card-text-info">
                        Publisher: {book.publisher}
                      </p>
                      <p className="book-card-text-info">
                        Page count: {book.page_count} pages
                      </p>
                      <p
                        className={
                          book.available
                            ? "book-card-text-avail"
                            : "book-card-text-not-avail"
                        }
                      >
                        {book.available
                          ? "Available for check out"
                          : "This book is currently checked out"}
                      </p>
                    </div>
                  </div>
                  <div className="book-card-buttons" onChange>
                    <button
                      className="book-card-button"
                      onClick={checkOutBook(book)}
                    >
                      Check out book
                    </button>
                    <button
                      className="book-card-button"
                      onClick={checkInBook(book)}
                    >
                      Return book
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   //   const router = useRouter();
//   const author = context.query.author;
//   let url = "http://localhost:5000/books?";
//   if (author) {
//     url += "author=" + author + "&&";
//   }
//   const res = await fetch(url, {
//     method: "GET",
//   });
//   const books = await res.json();
//   console.log("here");
//   console.log(`Fetched ${books}`);
//   console.log(books);
//   const bookjson = books[0];
//   console.log(JSON.stringify(books));
//   console.log(bookjson);
//   const data= {title: "hello"}
//   console.log(data);
//   return {props: {data: 'test'}}
// }

export default Search;
